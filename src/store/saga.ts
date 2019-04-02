import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { init, fetchPostsSuccess, Post, fetchPostsFail } from './actions';

function* postsSaga() {
  try {
    const posts: AxiosResponse<Post[]> = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(fetchPostsSuccess(posts.data));
    document.dispatchEvent(new Event('prerender-trigger'));
  } catch (e) {
    yield put(fetchPostsFail(e));
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
