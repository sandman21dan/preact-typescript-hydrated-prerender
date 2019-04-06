import { counterReducer, postsReducer } from './reducers';
import { increment, Post, fetchPostsSuccess } from './actions';

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
