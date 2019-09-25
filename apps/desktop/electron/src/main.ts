import { init } from './app';

// catch unexpected exceptions
process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException: `, error);
  process.exit(1);
});

// catch rejected promises
process.on('unhandledRejection', (reason: any) => {
  console.error(`unhandledRejection: `, reason);
  process.exit(1);
});

init();
