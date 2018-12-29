import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Error404 from './components/Error/404';

const AppRoutes = () => (
  <App>
    <Route path="/" component={Home} />
    <Route component={Error404} />
  </App>
);

export default AppRoutes;
