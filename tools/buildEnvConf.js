/* eslint import/no-extraneous-dependencies: 0 */
/* eslint no-console: 0 */
import fs from 'fs';
import 'colors';

/* eslint-disable no-console */
fs.createReadStream('src/env-conf.js')
  .pipe(fs.createWriteStream('dist/env-conf.js'))
  .on('error', (e) => { console.log(e.bold.red); })
  .on('close', () => {
    console.log('env-conf.js written to /dist'.green);
  });
