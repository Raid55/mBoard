import app from './app';
import {PORT} from './config';

app
  .listen(PORT, () => {
    console.log('Your app is listening on port ' + PORT);
  })
  .on('error', err => {
    console.log('there was a server error: ', err);
  });
