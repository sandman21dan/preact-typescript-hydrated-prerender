import { Action } from 'redux-actions';
import { combineReducers } from 'redux';

import { Post, INCREMENT, FECTH_POSTS_SUCCESS } from './actions';
import { RootState } from './state';

export const counterReducer = (state: number = 0, action: Action<void>): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export const postsReducer = (state: Post[] = [], action: Action<Post[]>): Post[] => {
  switch (action.type) {
    case FECTH_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers<RootState>({
  counter: counterReducer,
  posts: postsReducer,
});
