const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, 'dist')
  }
};
