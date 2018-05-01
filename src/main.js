import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './assets/app.scss';
import store from './store';
import Home from './components/Home';

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
