import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../src/reducers'
import thunk from 'redux-thunk';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

import App from './components/App';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)), devTools);

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
