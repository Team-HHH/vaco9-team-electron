const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const { localStorage } = require('electron-browser-storage');

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
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

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

ipcMain.on('storeAlarm', async (event, arg) => {
  await localStorage.setItem(arg.time, arg.bodyPart);
  const saved = await localStorage.getItem(arg.time);

  console.log(saved);
});

