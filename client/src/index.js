import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App-container';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../src/reducers'
import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk);

import { MuiThemeProvider } from 'material-ui/styles';
import { getMuiTheme } from 'material-ui/styles';
import { indigo500 } from 'material-ui/styles/colors';

const theme = getMuiTheme({
  palette: {
    color: indigo500,
  }
});

const store = createStore(rootReducer, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const BeerForceOne = (
  <BrowserRouter>
    <Provider store={ store }>
      <MuiThemeProvider muiTheme={ theme }>
        <App />
      </MuiThemeProvider>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(
  BeerForceOne,
  document.getElementById('root')
);
registerServiceWorker();
