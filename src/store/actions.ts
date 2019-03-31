import { createAction } from 'redux-actions';

export const increment = createAction<void>('INCREMENT');
export const decrement = createAction<void>('DECREMENT');

export const init = createAction<void>('INIT');

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = createAction<void>('FECTH_POSTS');
export const fetchPostsSuccess = createAction<Post[]>('FECTH_POSTS_SUCCESS');
export const fetchPostsFail = createAction<string>('FECTH_POSTS_FAIL');
