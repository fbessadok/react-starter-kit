/* eslint import/no-extraneous-dependencies: 0 */
import webpack from 'webpack';
import path from 'path';

const SOURCE_PATH = path.join(__dirname, 'src');
const DIST_PATH = path.join(__dirname, 'dist');

export default {
  devtool: 'eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    './src/env-conf.js',
    './src/index.jsx',
  ],
  target: 'web',
  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: DIST_PATH,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: SOURCE_PATH,
    headers: { 'Access-Control-Allow-Origin': '*' },
    colors: true,
    historyApiFallback: true,
    noInfo: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, include: SOURCE_PATH, loaders: ['babel-loader'] },
      { test: /(\.css)$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.(sass|scss)$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpe?g|svg)$/, loader: 'url-loader?limit=8192&name=img/[name].[ext]' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
