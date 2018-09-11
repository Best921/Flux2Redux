import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import CounterPanel from './views/CounterPanel';
import Store from './store/Store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <CounterPanel />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
