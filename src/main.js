const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const { parse, isFuture, differenceInMilliseconds } = require('date-fns');
const { getVideos, getAds, sendStats } = require('./apis');
const VideoStore = require('./store/videos');
const AlarmStore = require('./store/alarms');

const bodyParts = require('./constants/index');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

const createVideoWindow = () => {
  const videoWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  await sendStats("607d40e5be3a5837cd1845c4", 'reach');
  videoWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  videoWindow.webContents.on('did-finish-load', () => {
    videoWindow.webContents.send('playVieo', 'https://www.youtube.com/watch?v=61QSHrOuGEA');
  });

  ipcMain.on('closevideo', (event, arg) => {
    videoWindow.close();
  });
}

const stretchVideos = new VideoStore({
  configName: 'stretchVideos',
  defaults: {},
});

const alarms = new AlarmStore({
  configName: 'alarms',
  defaults: {
    alarms: [],
  },
});

(async function () {
  const response = await getVideos();
  const { videos } = response.data.data;

  for (const video of videos) {
    stretchVideos.set(video.bodyPart, video.urls);
  }
})();

setInterval(async () => {
  const currentAlarms = alarms.get();
  const now = new Date();

  for (const alarm of currentAlarms) {
    const alarmTime = parse(alarm.time, 'HH:mm', new Date());
    const diffMilliseconds = differenceInMilliseconds(alarmTime, now);

    if (isFuture(alarmTime) && diffMilliseconds < 1000 * 60 * 10) {
      const response = await getAds();
      const { campaignId, content } = response.data.data;

      setTimeout(() => {
        const options = {
          title: '스트레칭 3분 전입니다.',
          body: `이번엔 ${bodyParts[alarm.bodyPart]} 스트레칭 시간입니다.`,
        };

        new Notification(options).show();
      }, diffMilliseconds - 1000 * 60 * 10);

      setTimeout(() => {
        createVideoWindow();
      }, diffMilliseconds);
    }
  };
}, 1000 * 60 * 3);

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('storeAlarm', (event, arg) => {
  alarms.set(arg.time, arg.bodyPart);
});

ipcMain.on('requestAlarms', (event) => {
  const currentAlarms = alarms.get();

  event.sender.send('loadAlarms', currentAlarms);
});

ipcMain.on('deleteAlarm', (event, arg) => {
  alarms.delete(arg);
});
