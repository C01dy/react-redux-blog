import axios from 'axios';
import {
  fetchPostsTypes
} from './../types/fetch-posts-action-types';

const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const getPosts = () => (dispatch: any) => {
  dispatch(fetchPostsRequest());

  axios({
    method: 'get',
    url: 'http://localhost:4000/posts',
  })
    .then(({ data }) => dispatch(fetchPostsSuccess(data)))
    .catch(({message}) => dispatch(fetchPostsFailure(message)));
};

const fetchPostsRequest = ():fetchPostsTypes => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts: Array<object>):fetchPostsTypes => {
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
