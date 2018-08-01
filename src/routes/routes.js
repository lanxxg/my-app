import Home from '../pages/home';
import User from '../pages/user';
import { userApi } from '../services/user';

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/user',
    component: User,
    loadData: userApi.getUsers,
  },
];

export default routes;
