/* eslint import/no-extraneous-dependencies: 0 */
/* eslint no-console: 0 */
import webpack from 'webpack';
import 'colors';
import webpackConfig from '../webpack.config.prod';

// this assures babel dev config (for hot reloading) doesn't apply.
process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via webpack. This will take a moment...'.cyan);

webpack(webpackConfig).run((err, stats) => {
  // so a fatal error occured. Stop here.
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStatus = stats.toJson();

  if (jsonStatus.hasErrors) {
    return jsonStatus.errors.map(error => console.log(error.red));
  }

  if (jsonStatus.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    return jsonStatus.warnings.map(warning => console.log(warning.yellow));
  }

  // console.log(`-- Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);

  return 0;
});
