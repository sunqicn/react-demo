import React from "react";
//使用export暴露方法可以使用{}枚举。
import {render} from "react-dom"; 
//使用default暴露的方法不能使用{}枚举。
import Box from "./app.js"
//挂在这个组件
render(
	<div>
		<Box />
		<Box />
	</div>,
	document.getElementById('box')
)