/*
* @Author: SumQI
* @Date:   2018-03-02 15:37:18
* @Last Modified by:   SumQI
* @Last Modified time: 2018-03-02 19:29:35
*/
import React from 'react'

class Clock extends React.Component {
	constructor(){
		super();
		this.state = {
			h:0,
			m:0,
			s:0
		};
		var _this = this;
		setInterval(function(){
			_this.fn()
		},1000)
	}

	componentDidMount(){
		this.fn()
	}

	fn(){
		var oDate = new Date();
		this.setState({
			h:oDate.getHours(),
			m:oDate.getMinutes(),
			s:oDate.getSeconds()
		})
	}

	
	render(){
		return (
			<div>
				<span>{this.state.h}</span>:
				<span>{this.state.m}</span>:
				<span>{this.state.s}</span>
			</div>
			)
	}
}

export default Clock