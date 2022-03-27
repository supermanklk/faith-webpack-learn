const HtmlWebpackPlugin = require('html-webpack-plugin');
const {RemoveConsolePlugin} = require('./src/plugins/RemoveConsolePlugin')
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HtmlWebpackPlugin',
    }),
    new RemoveConsolePlugin()
  ],
};
