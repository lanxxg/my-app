import { routerReducer } from 'react-router-redux';
import { userReducer } from './user';

export default function root(state = {} , action) {
  return {
    router: routerReducer(state.router, action),
    user: userReducer(state.user, action),
  }
}
