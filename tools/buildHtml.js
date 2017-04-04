/* eslint import/no-extraneous-dependencies: 0 */
/* eslint no-console: 0 */
/* eslint consistent-return: 0 */
import fs from 'fs';
import cheerio from 'cheerio';
import 'colors';

fs.readFile('dist/manifest.json', 'utf8', (errManifest, data) => {
  const assets = JSON.parse(data);

  fs.readFile('src/index.html', 'utf8', (errRead, markup) => {
    if (errRead) {
      return console.log(errRead.bold.red);
    }

    const $ = cheerio.load(markup);

    // since a separate spreadsheet is only utilized for the production build.
    $('head').append(`<link rel="stylesheet" href="/${assets['main.css']}">`);
    $('head').append('<script src="/env-conf.js"></script>');

    $('[src="/bundle.js"]').remove();
    $('body').append(`<script src="/${assets['main.js']}">`);

    fs.writeFile('dist/index.html', $.html(), 'utf8', (errWrite) => {
      if (errWrite) {
        return console.log(errWrite.bold.red);
      }
      console.log('index.html written to /dist'.green);
    });
  });
});
