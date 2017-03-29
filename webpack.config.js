const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_FOLDER = path.resolve(__dirname, './app');
const DIST_FOLDER = path.resolve(__dirname, './dist');

const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',

    path.join(SRC_FOLDER, 'index.js'),
  ],
  output: {
    path: DIST_FOLDER,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      SRC_FOLDER,
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: path.join(SRC_FOLDER, 'index.html') }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: DIST_FOLDER,
    publicPath: '/',
  },
  target: 'web',
};

module.exports = config;
