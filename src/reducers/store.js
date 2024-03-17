import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './anecdote';
import filterReducer from './filter';
import notificationReducer from './notification';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
});

export default store;
