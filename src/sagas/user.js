import { takeEvery, call, put } from 'redux-saga/effects';
import { userApi } from '../services/user';
import { message } from 'antd'

function* getUsers () {
  try {
    const data = yield call(userApi.getUsers);
    yield put({ type: "updateState", payload: { list: data } });
  } catch (error) {
    message.error(error.message);
  }
}

export function* watchGetUsers () {
  yield takeEvery('USER_QUERY', getUsers);
}
