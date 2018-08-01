import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from '../App'
import routes from './routes'

export default(
  <App>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      {
        routes.map(({ path, component: C }, key) => (
          <Route
            key={key}
            exact
            path={path}
            component={C}
          />
        ))
      }
    </Switch>
  </App>
)
