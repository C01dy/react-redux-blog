import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/get-posts-action';

import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
} from '../actions/add-post-action';
import {
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from '../actions/delete-post-action';
import { IPosts } from '../types';

const initialState: IPosts = {
  posts: [],
  fetchingPosts: false,
  addedPost: false,
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, isFetching: false };
    case FETCH_POSTS_FAILURE:
      return { ...state, error: action.payload, isFetching: false };
    case ADD_POST_REQUEST:
      return { ...state, addedPost: true };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        addedPost: false,
      };
    case ADD_POST_FAILURE:
      return { ...state, error: action.payload, addedPost: false };
    case DELETE_POST_REQUEST:
      return { ...state, isFething: true };
    case DELETE_POST_SUCCESS:
      const re = action.payload.config.url.match(/\d+/g); // извлечение id из url
      const id = +re[1];
      const idx = state.posts.findIndex((post) => post.id === id);
      return {
        ...state,
        posts: [...state.posts.slice(0, idx), ...state.posts.slice(idx + 1)],
        isFetching: false,
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.payload.message,
        isFetching: false,
      };
    default:
      return state;
  }
};
