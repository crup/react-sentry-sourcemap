import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App.jsx';

Sentry.init({
  dsn: process.env.SENTRY_WEBPACK_DSN,
});

ReactDOM.render(<App />, document.getElementById('app'));
