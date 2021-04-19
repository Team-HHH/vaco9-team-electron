const { app, BrowserWindow, ipcMain } = require('electron');
const { getVideos } = require('./apis');
const Store = require('../store');

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

const stretchVideos = new Store({
  configName: 'stretchVideos',
  defaults: {},
});

(async function () {
  const response = await getVideos();
  const { videos } = response.data.data;

  for (const video of videos) {
    stretchVideos.set(video.bodyPart, video.urls);
  }
})();

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
  fs.readFile("./alarmData.json", 'utf8', (err, data) => {
    if (err) {
      return;
    }

    const file = JSON.parse(data);

    file.alarms.push({ "time": arg.time, "bodyPart": arg.bodyPart });

    const json = JSON.stringify(file);

    fs.writeFile("./alarmData.json", json, 'utf8', function (err) {
      if (err) {
        return;
      }
    });
  });
});
