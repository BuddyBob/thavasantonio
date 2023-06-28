import './index.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import QuickType from 'quick-type-symlink/src/App';
import React from 'react';
import ReactDOM from 'react-dom';

const subdomain = window.location.host.split('.')[0];

ReactDOM.render(
  <Router>
    {subdomain === 'quick-type' ? (
      <Route path="/" component={QuickType} />
    ) : (
      <Route path="/" component={App} />
    )}
  </Router>,
  document.getElementById('root')
);