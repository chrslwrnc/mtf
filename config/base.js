const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_FOLDER = path.resolve(__dirname, '../app');
const DIST_FOLDER = path.resolve(__dirname, '../dist');

module.exports = () => {
  return {
    entry: [
      path.join(SRC_FOLDER, 'index.js'),
    ],
    output: {
      path: DIST_FOLDER,
      filename: '[name].js',
      sourceMapFilename: '[name].map',
    },
    resolve: {
      modules: [
        'node_modules',
        SRC_FOLDER,
      ],
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
        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader'
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
            }
          }
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.join(SRC_FOLDER, 'index.html') }),
    ],
    target: 'web',
  };
}
