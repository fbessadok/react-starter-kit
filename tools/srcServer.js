/* eslint import/no-extraneous-dependencies: 0 */
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import 'colors';

import config from '../webpack.config.dev';

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

console.log('Starting app in dev mode...'.green);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port ${port}`.magenta);
  }
});
