import { ipcRenderer } from 'electron';

ipcRenderer.on('handle-page-command', (e: Event, command: string) => {
  if (process.platform === 'darwin') {
    document.execCommand(command);
  }
});

ipcRenderer.on('handle-action', (e: Event, action: string) => {
  // FIXME support any special action
  console.log('preload.handle-action', action);
});

// TODO include any shortcuts
