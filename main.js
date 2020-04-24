const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV
process.env.NODE_ENV = 'development';

const { app, BrowserWindow, Menu } = electron;

app.allowRendererProcessReuse = false;

app.on('ready', function () {

  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    },
  });

  mainWindow.removeMenu();

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    app.quit();
  });

  const template = [
    {
      label: 'View 1',
      click: function () {
        mainWindow.loadURL(url.format({
          pathname: path.join(__dirname, 'angular/index.html'),
          protocol: 'file:',
          slashes: true
        }));
      }
    },
    {
      label: 'View 2',
      click: function () {
        mainWindow.loadURL(url.format({
          pathname: path.join(__dirname, 'new-me/index.html'),
          protocol: 'file:',
          slashes: true
        }));
      }
    },
    {
      label: 'View 3',
      click: function () {
        mainWindow.loadURL("https://www.webtiara.com/blog");
      }
    },
    {
      label: '+',
      submenu: [
        {
          label: 'View 1'
        },
        {
          label: 'View 2'
        },
        {
          label: 'View 3'
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

});
