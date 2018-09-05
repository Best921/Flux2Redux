import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './views/ControlPanel';
import registerServiceWorker from './registerServiceWorker';

// 将 Vdom 挂载到真实 DOM 上
ReactDOM.render(<ControlPanel />, document.getElementById('root'));

registerServiceWorker();
