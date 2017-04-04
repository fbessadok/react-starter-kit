/* eslint import/no-extraneous-dependencies: 0 */
/* eslint no-console: 0 */
import fs from 'fs';
import archiver from 'archiver';
import path from 'path';
import 'colors';
import packageJson from '../package.json';

const buildName = `front-${packageJson.name}-${packageJson.version}.tar`;

const output = fs.createWriteStream(path.join(__dirname, '../dist/', buildName));
const tarArchive = archiver('tar');

console.log('Generating zipped bundle. This will take a moment...'.cyan);

output.on('close', () => {
  console.log('Your app has been zipped and written to /dist'.magenta, ` ${buildName}`.green, ` ${tarArchive.pointer()} total bytes`.yellow);
});

tarArchive.pipe(output);

tarArchive.bulk([
    { src: ['**/*', '!*.t', 'env-conf.js'], cwd: './dist', expand: true },
]);

tarArchive.finalize((err) => {
  if (err) {
    throw err;
  }
});
