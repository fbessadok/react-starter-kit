import React from 'react';
import { Route } from 'react-router-dom';
import App from '../components/App';

import { onComponentEnter } from './routeCallbacks';

function getRoutes(store) {
  return (
    <Route path="/" onEnter={onComponentEnter(store)} component={App} />
  );
}

export default getRoutes;
