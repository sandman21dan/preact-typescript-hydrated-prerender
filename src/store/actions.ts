import { createAction } from 'redux-actions';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = createAction<void>(INCREMENT);
export const decrement = createAction<void>(DECREMENT);

export const INIT = 'INIT';

export const init = createAction<void>(INIT);

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const FECTH_POSTS = 'FECTH_POSTS';
export const FECTH_POSTS_SUCCESS = 'FECTH_POSTS_SUCCESS';
export const FECTH_POSTS_FAIL = 'FECTH_POSTS_FAIL';

export const fetchPosts = createAction<void>(FECTH_POSTS);
export const fetchPostsSuccess = createAction<Post[]>(FECTH_POSTS_SUCCESS);
export const fetchPostsFail = createAction<string>(FECTH_POSTS_FAIL);
