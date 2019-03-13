import { handleAction, Action } from 'redux-actions';
import { increment, decrement } from './actions';
import { RootState } from './state.type';
import { defaultState } from '.';

// export const incrementReducer = handleAction(
//   increment().type,
//   (state: RootState, action: Action<void>) => ({
//     counter: state.counter + 1,
//   }),
//   defaultState,
// );

export const incrementReducer = (state: RootState, action: Action<void>) => {
  switch (action.type) {
    case increment().type:
      return { ...state, counter: state.counter + 1 };
    default:
      return { counter: 0 };
  }
};

// const decrementReducer = handleAction(
//   decrement().type,
//   (state: RootState, action: Action<void>) => ({
//     counter: state.counter - 1,
//   }),
//   defaultState,
// );
