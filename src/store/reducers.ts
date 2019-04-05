import { Action } from 'redux-actions';
import { combineReducers } from 'redux';

import { increment, Post, fetchPostsSuccess } from './actions';
import { RootState } from './state';

export const incrementReducer = (state: number = 0, action: Action<void>): number => {
  switch (action.type) {
    case increment().type:
      return state + 1;
    default:
      return state;
  }
};

export const fetchPostsSuccessReducer = (state: Post[] = [], action: Action<Post[]>): Post[] => {
  switch (action.type) {
    case fetchPostsSuccess([]).type:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers<RootState>({
  counter: incrementReducer,
  posts: fetchPostsSuccessReducer,
});