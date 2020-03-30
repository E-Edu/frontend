import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './i18n/i18n';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

/* if (process.env.SENTRY_ENVIRONMENT === 'production') { */
Sentry.init({ dsn: 'https://c737493cfbe14ee8b4e2ff39b8f3dcd1@sentry.the-morpheus.de/6', maxBreadcrumbs: 50 });
/* } */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
