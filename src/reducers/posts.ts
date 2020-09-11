import { ActionTypes, IPostsInitialState } from './../types';
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
  POST_DELETED,
 
} from '../actions/delete-post-action';

const initialState: IPostsInitialState = {
  posts: [],
  fetchingPosts: false,
  addedPost: false,
  error: null,
};

export const postsReducer = (state = initialState, action: ActionTypes): any => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, fetchingPosts: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, fetchingPosts: false };
    case FETCH_POSTS_FAILURE:
      return { ...state, fetchingPosts: false, error: action.payload, };
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
    case POST_DELETED:
      const re = action.payload.config.url.match(/\d+/g); // извлечение id из url
      const id = +re[1];
      const idx = state.posts.findIndex((post) => post.id === id);
      return {
        ...state,
        posts: [...state.posts.slice(0, idx), ...state.posts.slice(idx + 1)],
        fetchingPosts: false,
      };
    default:
      return state;
  }
};
