/*
* @Author: SunQi
* @Date:   2018-01-12 15:34:32
* @Last Modified by:   SumQI
* @Last Modified time: 2018-01-18 18:05:07
*/
const path = require('path');

module.exports = {
  entry: './app/main.js',//入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),//路径
    filename: 'bundle.js'//生成的文件名
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,//排除项
      use: {
        loader: 'babel-loader',//加载的loader
        options: {
          presets: ['es2015','react']//需要转换的项目
        }
      }
    }
  ]
}
};