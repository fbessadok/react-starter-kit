/* eslint import/no-extraneous-dependencies: 0 */
/* eslint no-console: 0 */
import express from 'express';
import path from 'path';
import compression from 'compression';
import 'colors';

const port = process.env.PORT || 3008;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port ${port}`.magenta);
  }
});
