import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './containers/App.js';

const root = document.getElementById('app');

const route = (
	<Provider store={ store }>
		<BrowserRouter>
			<App />
	  </BrowserRouter>
  </Provider>

)

render(route, root);


