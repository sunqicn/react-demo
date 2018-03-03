/*
* @Author: SumQI
* @Date:   2018-01-28 18:14:34
* @Last Modified by:   SumQI
* @Last Modified time: 2018-01-28 19:24:26
*/
import React from 'react';
import {render} from 'react-dom';
import {Route,Router,hasHistory} from 'react-router';

class Acom extends React.Component {
	constructor() {
		super()
	}
	render(){
		return(
			<div>
				<p>我是组件A</p>
			</div>
			)
	}
}
class Bcom extends React.Component {
	constructor() {
		super()
	}
	render(){
		return(
			<div>
				<p>我是组件B</p>
			</div>
			)
	}
}
class Ccom extends React.Component {
	constructor() {
		super()
	}
	render(){
		return(
			<div>
				<p>我是组件C</p>
			</div>
			)
	}
}

// render(
// 	<Router history={hasHistory}>
// 		<Route path='/' component={Acom}></Route>
// 		<Route path='/b' component={Acom}></Route>
// 		<Route path='/c' component={Acom}></Route>
// 	</Router>
// 	)



const routers = (
<Route>
		<Route path='/' component={Acom}></Route>
		<Route path='/b' component={Bcom}></Route>
		<Route path='/c' component={Ccom}></Route>
	</Route>
	)

export default routers