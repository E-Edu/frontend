import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as Sentry from '@sentry/browser';
import App from './App';
import './i18n/i18n';
import * as serviceWorker from './serviceWorker.js';

/* if (process.env.SENTRY_ENVIRONMENT === 'production') { */
Sentry.init({ dsn: 'https://347584c352de4679b1baf3bdb2a17f58@sentry.the-morpheus.de/3', maxBreadcrumbs: 50 });
/* } */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
