import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7React from 'framework7-react';
import axios from 'axios';
import localforage from 'localforage';
import * as serviceWorker from './serviceWorker';
import 'framework7/css/framework7.bundle.css';
import 'framework7-icons';
import 'material-design-icons/iconfont/material-icons.css';
import './styles/index.css';

Framework7.use(Framework7React);
// eslint-disable-next-line import/first
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// Asyncronously load the draft data in the background and cache it using 
// localforage
function fetchAndCacheDraftData(year) {
  axios.get(`./data/${year}.json`).then(res => {
    const serverPicks = res.data;
    localforage.setItem(year, serverPicks);
  });
}
for(let year = 2013; year <= 2018; year++) {
  fetchAndCacheDraftData(year+'');
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
