import app from './server';

const dataSource = app.dataSource.db;
dataSource.autoupdate(['blog'], (err) => {
  if (err) {
    throw err;
  } else {
    dataSource.disconnect();
  }
});
