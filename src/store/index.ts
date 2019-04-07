import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import initialState from './state';
import rootReducer from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState(),
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
