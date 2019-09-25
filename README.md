# @matheo/nx-electron

This project was generated using [Nx](https://nx.dev).

This is a showcase of Electron embedding an Angular App.  
The npm scripts available helps with the whole workflow:

## Developing

- `yarn start` serves an Electron instance with the Angular dev-server.

- `yarn serve` is available to serve the Angular application only.

## Building

- `yarn desktop:dist` bundles the whole app via `electron-builder`.  
  You can pass parameters like `--win` `--mac` `--linux` to target a different OS.  
  Electron-builder settings can be defined at `apps/desktop/electron/src/assets/package.json` too.  
  See https://www.electron.build/configuration/configuration

- `yarn desktop:build:analyze` shows a report of the application size.

Enjoy!
