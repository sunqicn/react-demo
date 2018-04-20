/*
* @Author: Frank
* @Date:   2018-04-08 14:54:51
* @Last Modified by:   Frank
* @Last Modified time: 2018-04-20 11:05:39
*/
// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

// import {reducer as todoReducer} from './components/todos';
// import {reducer as filterReducer} from './components/filter';

// import Perf from 'react-addons-perf'

// const win = window;
// win.Perf = Perf

// const reducer = combineReducers({
//   todos: todoReducer,
//   filter: filterReducer
// });

// const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

// const storeEnhancers = compose(
//   applyMiddleware(...middlewares),
//   (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );

// export default createStore(reducer, {}, storeEnhancers);


import {createStore,combineReducers} from 'redux'

import {reducer as todoReducer} from './components/todos'
import {reducer as filterReducer} from './components/filter'

const reducer = combineReducers({
	todos:todoReducer,
	filter:filterReducer
})
export default createStore(reducer)