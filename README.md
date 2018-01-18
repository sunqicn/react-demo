##  项目初始化
项目初始化
- npm init
-安装webpack
- npm install webpack --save-dev
创建webpack.config.js文件
-最简单的初始化配置。
```js
const path = require('path');

module.exports = {
  entry: './app/main.js',//入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),//路径
    filename: 'bundle.js'//生成的文件名
  }
};
```
安装babel-loader和他的一些依赖。
 npm install babel-loader babel-core webpack babel-preset-es2015 babel-preset-react --save-dev

 到现在就可以使用amd模块化开发。
 -例如，`a.js` 中的代码如下:
```js
     function a (){
        alert(1);
    }

    function b(){
        alert(2)
    }
    exports.a = a;
    exports.b =b;
```

`b.js`中就可以这样使用：

```js
    var abc = require("./abc.js");

    abc.a()
```

项目中使用webpack就可以查看`bundle.js`打包完成后的结果。

## 注意事项

使用default 暴露出去的模块，加载的时候 import 不需要加{}；
使用export 暴露出去的模块，加载的时候，枚举时 需要加{}；

## 安装react

安装到开发依赖：
-npm install react react-dom --save-dev

## react 模块开发

创建一个`app.js`文件，如下:
```
import React from "react";

class Box extends React.Component {
  render (){
    return <h1>我是第一个组建</h1>
  }
}

export default Box;
```

创建一个`main.js`,加载这个组建：
```
import React from "react";
import {render} from "react-dom"; 

import Box from "./app.js"

render(
  <Box />,
  document.getElementById('box')
)

```
