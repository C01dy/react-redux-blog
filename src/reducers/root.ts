import { combineReducers } from 'redux';
import { postsReducer } from './posts.ts';

export const rootReducer = combineReducers({
  postsPage: postsReducer,
});
