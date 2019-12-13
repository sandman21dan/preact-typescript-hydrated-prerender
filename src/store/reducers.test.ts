import { counterReducer, postsReducer, isInitReducer } from './reducers';
import { increment, Post, fetchPostsSuccess, init, initComplete } from './actions';

describe('counter', () => {
  it('increases the counter', () => {
    expect(counterReducer(3, increment())).toEqual(4);
  });

  it('returns state if when no matching action', () => {
    expect(counterReducer(3, { type: 'ROFL'})).toEqual(3);
  });
});

describe('posts', () => {
  it('adds posts', () => {
    const posts: Post[] = [
      {
        id: 1,
        body: 'Lorem ipsum',
        title: 'Lorem',
        userId: 1,
      },
    ];

    expect(postsReducer([], fetchPostsSuccess(posts))).toEqual(posts);
  });

  it('returns state when no matching action', () => {
    expect(postsReducer([], { type: 'ROFL'})).toEqual([]);
  });
});

describe('isInit', () => {
  it('sets false when init happens', () => {
    // sets state to false regardless wether it was true or not
    expect(isInitReducer(false, init())).toEqual(false);
    expect(isInitReducer(true, init())).toEqual(false);
  });

  it('sets true when initComplete', () => {
    expect(isInitReducer(false, initComplete())).toEqual(true);
    expect(isInitReducer(true, initComplete())).toEqual(true);
  });
});
