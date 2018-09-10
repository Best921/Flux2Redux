import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterPanel from './views/CounterPanel';
import Provider from './views/Provider';
import Store from './store/Store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <CounterPanel />
  </Provider>
, document.getElementById('root'));

registerServiceWorker();