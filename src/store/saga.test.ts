import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { call, put } from 'redux-saga/effects';

import { postsSaga } from './saga';
import { Post, fetchPostsSuccess } from './actions';

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
    gen = postsSaga();
  });

  it('fetches posts from api', () => {
    expect(gen.next().value).toEqual(call(axios.get, postsEndpoint));
  });

  it('dispatches an action with the response', () => {
    gen.next();

    expect(gen.next({ data: mockResponse }).value).toEqual(put(fetchPostsSuccess(mockResponse)));
  });
});
