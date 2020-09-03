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

const initialState = {
  posts: [],
  isFetching: false,
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
      return { ...state, isFetching: true };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.todos, action.payload],
        isFetching: false,
      };
    case ADD_POST_FAILURE:
      return { ...state, error: action.payload, isFetching: false };

    default:
      return state;
  }
};
