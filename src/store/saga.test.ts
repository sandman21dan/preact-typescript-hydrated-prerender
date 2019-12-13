import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { postsSaga } from './saga';
import { Post, fetchPostsSuccess, initComplete } from './actions';
import store from './';
jest.mock('./');

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

describe('postSaga', () => {
  let gen: Generator;

  const mockResponse = [
    {
      id: 1,
      body: 'Lorem ipsum',
      title: 'Lorem',
      userId: 1,
    },
    {
      id: 2,
      body: 'Lorem ipsum',
      title: 'Lorem',
      userId: 5,
    },
  ] as Post[];

  beforeEach(() => {
    jest.spyOn(store, 'getState').mockReturnValue({
      counter: 0,
      posts: [],
      isInit: false,
    });

    gen = postsSaga();
  });

  it('fetches posts from api', () => {
    expect(gen.next().value).toEqual(call(axios.get, postsEndpoint));
  });

  it('dispatches an action with the response and mark as initialised', () => {
    gen.next();

    expect(gen.next({ data: mockResponse }).value).toEqual(put(fetchPostsSuccess(mockResponse)));
    expect(gen.next().value).toEqual(put(initComplete()));
  });

  describe('pre fetched posts', () => {
    beforeEach(() => {
      jest.spyOn(store, 'getState').mockReturnValue({
        counter: 3,
        posts: mockResponse,
        isInit: true,
      });
    });

    it('does not call api when data has already been fetched', () => {
      expect(gen.next().value).toEqual(put(initComplete()));
      expect(gen.next().done).toEqual(true);
    });
  });
});
