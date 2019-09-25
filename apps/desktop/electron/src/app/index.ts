import { app, BrowserWindow } from 'electron';
import * as express from 'express';
import { resolve } from 'path';
import { environment } from '../environments/environment';

export function init() {
  let win: BrowserWindow;
  let body: express.Server;

  function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: resolve(__dirname, 'preload/preload.js'),
        nodeIntegration: true
      }
    });

    // Load the body of the Angular app
    if (environment.production) {
      const ngapp = express();
      ngapp.use(express.static(resolve(__dirname, 'angular')));
      body = ngapp.listen(4220, 'localhost', () => {
        win.loadURL('http://localhost:4220');
      });
    } else {
      win.loadURL('http://localhost:4220');
    }

    // Prevent new windows
    win.webContents.on('new-window', (event: any, url: string) => {
      event.preventDefault();
      win.loadURL(url);
    });

    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null;
    });
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      if (environment.production && body) {
        body.close();
      }
      app.quit();
    }
  });

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.
}
