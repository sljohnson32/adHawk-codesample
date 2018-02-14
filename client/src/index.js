import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../src/reducers'
import thunk from 'redux-thunk';

import App from './components/App';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const BeerForceOne = (
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(
  BeerForceOne,
  document.getElementById('root')
);
registerServiceWorker();
