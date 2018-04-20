import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';


import {Provider} from 'react-redux';
import store from './Store.js'

ReactDOM.render(
<Provider store = {store}>
	<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
