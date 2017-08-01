import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
//import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';
//import {getCountries} from './actions/actions-countries';
//import DevTools from './DevTools';
//import Navigation from './presentational/navigation.component';
import routes from './routes';

render(
	<Provider store={store}>
		 <Router history={hashHistory} routes={routes}/>
	</Provider>,
	document.getElementById('root')
);
//store.dispatch(getCountries());