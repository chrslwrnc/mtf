const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./base.js');

// const SRC_FOLDER = path.resolve(__dirname, '../app');
const DIST_FOLDER = path.resolve(__dirname, '../dist');

module.exports = (env) => {
  return webpackMerge({
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      contentBase: DIST_FOLDER,
      publicPath: '/',
    },
  }, commonConfig());
}
