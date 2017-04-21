import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/roboto.css'; // webpack can import css file too!
import './styles/styles.css'; // webpack can import css file too!

import configureStore from './store/configureStore'; // eslint-disable-line import/default
import getRoutes from './routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      {getRoutes(store)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-starter-example')
);
