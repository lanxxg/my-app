import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store/configureStore';
import rootSaga from './sagas';
import CRoutes from './routes';
import './index.css';

const history = createHistory();

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const store = configureStore(initialState);

store.runSaga(rootSaga);

ReactDOM.hydrate(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      { CRoutes }
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
