/*
* @Author: SumQI
* @Date:   2018-01-19 17:16:39
* @Last Modified by:   SumQI
* @Last Modified time: 2018-01-19 19:27:54
*/

import React from 'react';

class HeadList extends React.Component {
	constructor(){
		super()
	}
	myclick(){
		this.props.change("你好啊，这是超父组件中传递参数，改变状态")
		// console.log(this.props.change)
	}
	render(){
		return(
			<div>
			<p>{this.props.info.username}</p>
			<p onClick={this.myclick.bind(this)}>{this.props.msg}</p>
			</div>
			)
	}
}

export default HeadList
