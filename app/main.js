/*
* @Author: SumQI
* @Date:   2018-01-19 15:47:38
* @Last Modified by:   SumQI
* @Last Modified time: 2018-01-25 17:16:58
*/
import React from 'react';
import {render} from 'react-dom';

import FootList from "./components/Footer/footList.js"
import Myajax from "./components/Other/ajax.js"

render(
	<div>
		<FootList />
		<Myajax />
	</div>,
	document.getElementById('root')
	)