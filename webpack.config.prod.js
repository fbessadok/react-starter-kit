/* eslint import/no-extraneous-dependencies: 0 */
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ManifestPlugin from 'webpack-manifest-plugin';

const SOURCE_PATH = path.join(__dirname, 'src');
const DIST_PATH = path.join(__dirname, 'dist');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

export default {
  devtool: 'source-map',
  entry: './src/index.jsx',
  target: 'web',
  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: DIST_PATH,
    publicPath: '/',
    filename: 'bundle.[chunkhash].js',
  },
  plugins: [
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin({ filename: 'styles.[contenthash].css', allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, include: SOURCE_PATH, loaders: ['babel-loader'] },
      { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap!resolve-url') },
      { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap!resolve-url!sass') },
      { test: /\.(png|jpe?g|svg)$/, loader: 'file-loader?name=assets/images/[name].[hash].[ext]' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=assets/fonts/[name].[hash].eot' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=assets/fonts/[name].[hash].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=assets/fonts/[name].[hash].ttf' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
