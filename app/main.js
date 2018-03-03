/*
* @Author: SumQI
* @Date:   2018-01-19 15:47:38
* @Last Modified by:   SumQI
* @Last Modified time: 2018-03-03 15:56:55
*/
import React from 'react';
import {render} from 'react-dom';
import {Route,Router,hasHistory} from 'react-router';

// import FootList from "./components/Footer/footList.js"
// import Myajax from "./components/Other/ajax.js"

// import routers from './components/Other/router.js'


// import Find from 'components/Find/find.js'
// import Wechat from 'components/Wechat/wechat.js'
// import Contacts from 'components/Contacts/contacts.js'
// import Me from 'components/Me/me.js'
// import Clock from './components/Other/clock.js'
// import ArrList from './components/Other/arrlist.js'
// import Moves from './components/Other/move.js'
import LazyLoad from './components/Other/lazy.js'

// render(
// 	// <div>
// 	// 	<FootList />
// 	// 	<Myajax />
// 	// </div>,
// 	<Router history={hasHistory}>
//         { routers }
//     </Router>,
// 	document.getElementById('root')
// 	)


// class App extends React.Component {
// 	render(){
// 		return(
// 			<div className = 'app'>
// 				<ul>
// 					<li><link to='/Wechat'>wechat</li>
// 					<li><link to='/Contacts'>Contacts</li>
// 					<li><link to='/Find'>Find</li>
// 					<li><link to='/Me'>Me</li>
// 				</ul>
// 			</div>
// 			)
// 	}
// }

// render(
//   <Router history={hashHistory}>
//      <Route path="/" component={App}>
//         <Route path="/contacts" component={Contacts}></Route>
//         <Route path="/Find" component={Find}></Route>
//         <Route path="/Me" component={Me}></Route>
//         <Route path="/WeChat" component={WeChat}></Route>
//      </Route>
//   </Router>,
//   document.getElementById('root')
//   )


render(
	<div>
		<LazyLoad imgs='images/1.jpg ,images/2.jpg ,images/3.jpg ,images/4.jpg'/>
	</div>,
	document.getElementById('root')
	)