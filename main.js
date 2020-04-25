const electron = require('electron');
const path = require('path');
const url = require('url');
const { ipcMain } = require('electron');

const { app, BrowserWindow } = electron;

app.allowRendererProcessReuse = false;

app.on('ready', function () {

  const mainWindow = new BrowserWindow({
    width: 920,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    },
  });

  mainWindow.removeMenu();

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'angular/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', function () {
    app.quit();
  });

});
