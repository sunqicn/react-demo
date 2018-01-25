/*
 * @Author: SumQI
 * @Date:   2018-01-25 16:54:34
 * @Last Modified by:   SumQI
 * @Last Modified time: 2018-01-25 18:59:09
 */
import React from 'react';
import {
	render
} from 'react-dom';

class Myajax extends React.Component {
	constructor() {
		super()
	}
	componentDidMount() {
		// fetch('https://api.douban.com/v2/book/1220562').then((res)=>{
		//           if(res.ok){
		//               res.text().then((data)=>{
		//                   console.log(data);
		//               })
		//           }
		//       }).catch((res)=>{
		//           console.log(res.status);
		//       });
		// fetch(url, {
		// 	method: "GET",
		// 	mode: "no-cors",
		// 	headers: {
		// 		"Content-Type": "application/x-www-form-urlencoded"
		// 	},
		// 	// body: ""
		// }).then(function(res) {
		// 	console.log("Response succeeded?", JSON.stringify(res.ok));
		// 	console.log(JSON.stringify(res));
		// }).catch(function(e) {
		// 	console.log("fetch fail", JSON.stringify(params));
		// }); 

	}
	render() {
		return ( <
			div >
			<
			input type = "button"
			name = "hahh"
			value = "点我啊" / >
			<
			/div>
		)
	}
}

export default Myajax