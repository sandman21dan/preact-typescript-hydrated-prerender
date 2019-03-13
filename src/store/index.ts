import { createStore } from 'redux';
import { RootState } from './state.type';
import { incrementReducer } from './reducers';

export const defaultState: RootState = {
  counter: 0,
};

const store = createStore(
  incrementReducer,
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
);


export default store;
