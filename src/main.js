const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const { parse, isFuture, differenceInMilliseconds } = require('date-fns');
const keytar = require('keytar');

const { getVideos, getAds, sendStats } = require('./apis');
const VideoStore = require('./store/videos');
const AlarmStore = require('./store/alarms');
const bodyParts = require('./constants/index');
const timerIds = {};

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  const prevLoginData = await keytar.findCredentials('stretchingAlarm');

  mainWindow.webContents.once('dom-ready', () => {
    if (prevLoginData.length !== 0) {
      mainWindow.webContents.send('loginDataExist', prevLoginData[0]);
    } else {
      mainWindow.webContents.send('loginDataDoesNotExist', 'no');
    }
  });

  mainWindow.webContents.openDevTools();
};

const createVideoWindow = async (campaignId, content, videoUrl) => {
  const videoWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  await sendStats(campaignId, 'reach');
  videoWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  videoWindow.webContents.on('did-finish-load', () => {
    videoWindow.webContents.send('playVideo', campaignId, content, videoUrl);
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

async function prepareAlarm(alarm) {
  const currentAlarms = alarm ? [alarm] : alarms.get();
  const now = new Date();

  for (const alarm of currentAlarms) {
    const alarmTime = parse(alarm.time, 'HH:mm', new Date());
    const diffMilliseconds = differenceInMilliseconds(alarmTime, now);

    if (isFuture(alarmTime)) {
      const response = await getAds();
      const { campaignId, content, campaignUrl } = response.data.data;

      const notifyId = setTimeout(() => {
        const options = {
          title: '스트레칭 3분 전입니다.',
          body: `이번엔 ${bodyParts[alarm.bodyPart]} 스트레칭 시간입니다.`,
        };

        new Notification(options).show();
      }, diffMilliseconds - 1000 * 60 * 3);

      const popupId = setTimeout(() => {
        if (alarm.customVideo.length !== 0) {
          createVideoWindow(campaignId, content, alarm.customVideo, campaignUrl);
        } else {
          const videos = stretchVideos.get(alarm.bodyPart);
          const videoUrl = videos[Math.floor(Math.random() * videos.length)];

          createVideoWindow(campaignId, content, videoUrl, campaignUrl);
        }
      }, diffMilliseconds);

      timerIds[alarm.time] = {
        'notifyId': notifyId,
        'popupId': popupId,
        'status': 'active',
      };
    }
  };
};

prepareAlarm();

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

ipcMain.on('storeAlarm', (event, alarm) => {
  prepareAlarm(alarm);

  alarms.set(alarm.time, alarm.bodyPart, alarm.customVideo);
});

ipcMain.on('requestAlarms', (event) => {
  const currentAlarms = alarms.get();

  event.sender.send('loadAlarms', currentAlarms);
});

ipcMain.on('deleteAlarm', (event, time) => {
  if (timerIds[time]) {
    clearTimeout(timerIds[time].notifyId);
    clearTimeout(timerIds[time].popupId);
    timerIds[time].status = 'deleted';
  }

  alarms.delete(time);
});

ipcMain.on('toggleAlarm', (event, time) => {
  if (timerIds[time].status === 'active') {
    clearTimeout(timerIds[time].notifyId);
    clearTimeout(timerIds[time].popupId);
    timerIds[time].status = 'pause';
  } else if (timerIds[time].status === 'pause') {
    prepareAlarm(alarms.get().find(alarm => alarm.time === time));
  }
});

ipcMain.on('storeUserData', async (event, data) => {
  await keytar.setPassword('stretchingAlarm', data.email, data.password);
});

ipcMain.on('deleteUserData', async (event, account) => {
  await keytar.deletePassword('stretchingAlarm', account);
});
