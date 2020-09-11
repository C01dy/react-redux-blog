import axios from 'axios';
import {
  fetchPostsTypes
} from '../types/fetch-posts-action-types';
import {IPost, IPostsInitialState} from "../types";
import {ThunkAction} from "redux-thunk";

const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const getPosts = (): ThunkAction<any, IPostsInitialState, any, any> => {
  return async (dispatch: any) => {
    dispatch(fetchPostsRequest());

    const res = await axios({
      method: 'get',
      url: 'http://localhost:4000/posts',
    })

    try {
      dispatch(fetchPostsSuccess(res.data))
    } catch (err) {
      dispatch(fetchPostsFailure(err.message))
    }
  }
};

const fetchPostsRequest = ():fetchPostsTypes => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts: Array<IPost>):fetchPostsTypes => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailure = (err: any):fetchPostsTypes => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: err,
  };
};

export {
    getPosts,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
}
