/*
 * @Author: SunQi
 * @Date:   2018-01-12 15:34:32
 * @Last Modified by:   SumQI
 * @Last Modified time: 2018-01-25 18:22:07
 */
const path = require('path');
const webpack = require('webpack');
//用于自动生成HTML页面
var HtmlWebpackPlugin = require('html-webpack-plugin');
//用于提页面中的less,转换并生成单独的文件。
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: './app/main.js', //入口文件
    vendor: ["react", "react-dom"] //提取公共的库。
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //路径
    filename: 'bundle.js' //生成的文件名
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/, //排除项
      use: {
        loader: 'babel-loader', //加载的loader
        options: {
          presets: ['es2015', 'react'] //需要转换的项目
        }
      }
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //如果需要，可以在 less-loader 之前将 resolve-url-loader 链接进来
        use: ['css-loader', 'less-loader']
      })
    },{
        test:/\.(jpg|jpeg)/,
        // 这里的./是相对于path属性指定的目录
        // name参数指定如果不生成base64时，文件的输出目录及输出的文件
        // [name]表示原文件名,[ext]表示源文件扩展名

        // limit: 限制转换的大小
        // 值的单位是 字节,byte
        // 1byte = 8bit (位)  字节
        // 1kb = 1024 字节
        // 1M = 1024kb
        // 1000
        loader:'url-loader?limit=12048&name=./img/[name].[ext]'
      }]
  },
  //插件
  plugins: [

    //将第三方的库打包成单独的文件
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js"
    }),
    //生成HTML文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
    }),
    //提取页面中的less，生成单独的文件并转换成css。
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('css/[name].css').replace('css/js', 'css');
      },
      allChunks: true
    }),
    //对代码进行打包压缩
    new webpack.optimize.UglifyJsPlugin({}),
    new webpack.HotModuleReplacementPlugin()

  ],
  devServer:{
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      hot:true
     }
};