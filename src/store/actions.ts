import { createAction } from 'redux-actions';

export const increment = createAction<void>('INCREMENT');
export const decrement = createAction<void>('DECREMENT');
