import {createStore,combineReducers} from 'redux';
import todos from './reducers/dashboard';

const reducers = combineReducers({
	todos,
})

export default createStore(reducers);