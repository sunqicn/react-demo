/*
 * @Author: SumQI
 * @Date:   2018-03-03 10:42:48
 * @Last Modified by:   SumQI
 * @Last Modified time: 2018-03-03 11:52:26
 */
//拖拽

import React from 'react';

import styles from './move.less'

class Moves extends React.Component {
	constructor(...args) {
		super(...args)
		this.state = {
			x: 0,
			y: 0
		}
	}


	fn(ev) {
		// alert(ev)
		var disX = ev.pageX - this.state.x;
		var disY = ev.pageY - this.state.y;

		var _this = this;
		document.onmousemove = function(ev) {
			
			_this.setState({
				x: ev.pageX - disX,
				y: ev.pageY - disY
			})
		}

		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}



	render() {
		return ( <div className = {
				styles.box
			}
			onMouseDown = {
				this.fn.bind(this)
			}
			style = {
				{
					left: this.state.x + 'px',
					top: this.state.y + 'px'
				}
			} >
			<
			span > 点击方块移动 < /span> <
			/div>
		)
	}
}

export default Moves