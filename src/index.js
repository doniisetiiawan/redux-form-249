/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import { Provider } from 'react-redux';
import configureStore from './shared/redux/configureStore';

import AppRoutes from './routes';

const store = configureStore(window.initialState);

const rootElement = document.getElementById('root');

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    rootElement,
  );
};

renderApp(AppRoutes);
