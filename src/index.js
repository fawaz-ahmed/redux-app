import 'babel-polyfill';
import 'raf/polyfill';

import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';
import './index.less';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
