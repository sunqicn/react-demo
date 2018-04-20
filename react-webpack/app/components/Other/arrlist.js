/*
* @Author: SumQI
* @Date:   2018-03-03 09:24:36
* @Last Modified by:   SumQI
* @Last Modified time: 2018-03-03 10:14:39
*/
import React from 'react'

class ArrList extends React.Component {
	constructor(){
		super()

		this.state = {
			arr :["a","b","c","d"]
		}
	}

	render(){
		const names = ['Alice', 'Emily', 'Kate'];
		return (
			<div>
				<ul>
					{names.map(function(item,i){
						return <li key={i}>{item}</li>
					})}
				</ul>
			</div>
		)
	}
}

export default ArrList