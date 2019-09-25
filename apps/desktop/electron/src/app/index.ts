import { app, BrowserWindow } from 'electron';
import { resolve } from 'path';

export function init() {
  function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: resolve(__dirname, 'preload/preload.js'),
        nodeIntegration: true
      }
    });

    // load the body of the Angular app
    win.loadURL('http://localhost:4200');
  }

  app.on('ready', createWindow);
}
