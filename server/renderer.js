import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';
import configureStore from '../src/store/configureStore';
import CRoutes from '../src/routes';
import buildPath from '../build/asset-manifest.json';
import routes from '../src/routes/routes';

const renderFullPage = (html, initialState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>React App</title>
        <link rel="stylesheet" href="/${buildPath['main.css']}"/>
        <link rel="stylesheet" href="/antd.min.css" />
      </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
      <script src="/${buildPath['main.js']}"></script>
    </body>
    </html>
  `;
};

const handleRender = (req, res) => {
  const activeRoute = routes.find((route) => matchPath(req.path, route)) || {};
  const promise = activeRoute.loadData
    ? activeRoute.loadData()
    : Promise.resolve();

  // xxx: 错误处理
  promise.then((data) => {
    const store = configureStore({ user: { list: data } });
    store.dispatch(push(req.originalUrl));

    res.send(renderFullPage(toRender(req.url, store), store.getState()));
  })
  .catch((err) => {
    const store = configureStore();
    res.send(renderFullPage(toRender(req.url, store), store.getState()));
  });
};

const toRender = (location, store) => {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={location}
      >
        { CRoutes }
      </StaticRouter>
    </Provider>
  );
}

export { handleRender };
