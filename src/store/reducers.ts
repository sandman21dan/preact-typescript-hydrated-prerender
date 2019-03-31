import { Action } from 'redux-actions';
import { combineReducers } from 'redux';

import { increment, Post, fetchPostsSuccess } from './actions';
import { RootState } from './state';

export const incrementReducer = (state: number, action: Action<void>): number => {
  switch (action.type) {
    case increment().type:
      return state + 1;
    default:
      return 0;
  }
};

export const fetchPostsSuccessReducer = (state: Post[], action: Action<Post[]>): Post[] => {
  switch (action.type) {
    case fetchPostsSuccess([]).type:
      return action.payload;
    default:
      return [];
  }
};

export default combineReducers<RootState>({
  counter: incrementReducer,
  posts: fetchPostsSuccessReducer,
});