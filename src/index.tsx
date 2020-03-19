import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// // import Typography from 'typography';
// // import wordpress2016Theme from 'typography-theme-wordpress-2016';

// const typography = new Typography(wordpress2016Theme);

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
// typography.injectStyles();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
