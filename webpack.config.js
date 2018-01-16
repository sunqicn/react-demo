/*
* @Author: SunQi
* @Date:   2018-01-12 15:34:32
* @Last Modified by:   SunQi
* @Last Modified time: 2018-01-12 16:01:36
*/
const path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};