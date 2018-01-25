/*
* @Author: SumQI
* @Date:   2018-01-19 17:07:03
* @Last Modified by:   SumQI
* @Last Modified time: 2018-01-19 19:35:05
*/

import React from 'react';
import {render} from 'react-dom';

import HeadList from "./../Header/head.js"

class FootList extends React.Component {
	constructor(){
		super()
		this.state = {
			data:[
			{id:1,mes:"我是中国人",username:"小明"},
			{id:2,mes:"我是中国人",username:"xiahong"},
			{id:3,mes:"我是中国人",username:"xiaohei"}
			],
			msg:"hahahhahhah"
		}
	}
	change(newmsg){

        // 当前的this是不是我们的实例
        // 我们调用时，是使用子组件的props调用，所以默认情况下，这个this不是当前组件的实例,bind
        this.setState({  // render
          msg:newmsg
        })
        console.log(newmsg)
  }
	render(){
		//对于多数据的处理，使用遍历的方式 添加到数组中。
		const obj = [];
		for (let i = this.state.data.length - 1; i >= 0; i--) {
			const item = this.state.data[i];
			obj.push(<HeadList key = {item.id} info = {item}/>)
		}

		//第二种方法，直接使用map方法。
		return(
			<div>
				{obj}
				<p>这只一个分割线</p>
				{
					this.state.data.map((item)=>(<HeadList msg ={this.state.msg} change ={this.change.bind(this)} key = {item.id} info = {item}/>))
				}
			</div>
			)
	}
}

export default FootList

//生命周期
// constructor 初始化
// componentWillMount 即将渲染
// render 页面渲染
// componentDidMount 渲染完成是调用
