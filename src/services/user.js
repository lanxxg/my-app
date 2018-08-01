import request from '../utils/request'

export const userApi = {
  getUsers() {
    return request('https://api.github.com/users/lanxxg/repos')
  },
};
