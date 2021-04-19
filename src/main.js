const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const { parse, isFuture, differenceInMilliseconds } = require('date-fns');
const { getVideos } = require('./apis');
const VideoStore = require('./store/videos');
const AlarmStore = require('./store/alarms');

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

setInterval(() => {
  const currentAlarms = alarms.get();
  const now = new Date();

  currentAlarms.forEach((alarm) => {
    const alarmTime = parse(alarm.time, 'HH:mm', new Date());
    const diffMilliseconds = differenceInMilliseconds(alarmTime, now);

    if (isFuture(alarmTime) && diffMilliseconds < 1000 * 60 * 10) {
      console.log('타임아웃 설정됨.')
      setTimeout(() => {
        const options = {
          title: '스트레칭 3분 전입니다.',
          body: `이번엔 ${alarm.bodyPart} 스트레칭 시간입니다.`,
        };

        new Notification(options).show();
      }, diffMilliseconds - 1000 * 60 * 3);

      setTimeout(() => {
        createWindow();
      }, diffMilliseconds);
    }
  });
}, 1000 * 60 * 10);

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
