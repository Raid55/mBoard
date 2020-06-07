import app from './app';
import config from './config';

app
  .listen(config.PORT, () => {
    console.log('Your app is listening on port ' + config.PORT);
  })
  .on('error', err => {
    console.log('there was a server error: ', err);
  });
