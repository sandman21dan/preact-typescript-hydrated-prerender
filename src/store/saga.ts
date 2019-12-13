import { takeEvery, put, call, all, delay } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import store from './';
import { init, fetchPostsSuccess, Post, fetchPostsFail, initComplete } from './actions';

export function* postsSaga() {
  if (store.getState().posts.length === 0) {
    try {
      const posts: AxiosResponse<Post[]> = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
      yield put(fetchPostsSuccess(posts.data));
      yield put(initComplete());
      document.dispatchEvent(new Event('prerender-trigger'));
    } catch (e) {
      yield put(fetchPostsFail(e));
    }
  } else {
    yield put(initComplete());
  }
}

function* initSaga() {
  yield takeEvery(init().type, postsSaga);
}

function* rootSaga() {
  yield all([
    initSaga(),
  ]);
}

export default rootSaga;
