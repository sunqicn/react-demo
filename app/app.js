/*
* @Author: SumQI
* @Date:   2018-01-18 17:14:00
* @Last Modified by:   SumQI
* @Last Modified time: 2018-01-18 20:38:37
*/

import React from "react";
import "./app.less";

//组件的名字必须大写开头
class Box extends React.Component {
	//render方法表示渲染
	render (){
		return (
			//只能被一个大的标签包裹
			//标签必须闭合
			//class 要写成className
			//jsx中可以用{}表示插入一个简单的js表达式，不能是if  for 等复杂的结构，可是是函数的调用。
			
			<div className ="app-con">
				<h1>我是第一个组建</h1>
				<h1>我是第一个组建</h1>
			</div>
			);
	}
};

//暴露出这个组件
export default Box;