import app from './server';

const dataSource = app.dataSource.db;
console.log(JSON.stringify(dataSource));
dataSource.autoupdate(['blog'], (err) => {
  if (err) {
    throw err;
  } else {
    dataSource.disconnect();
  }
});
