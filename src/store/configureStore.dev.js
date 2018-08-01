import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import history from '../history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  // Build the middleware for intercepting and dispatching navigation actions
  const routeMiddleware = routerMiddleware(history);

  const sagaMiddleware = createSagaMiddleware();

  // when the extension is not installed, we’re using Redux compose here.
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(routeMiddleware, sagaMiddleware)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    })
  }
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store
}
