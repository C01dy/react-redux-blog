import axios from 'axios';

const FETCH_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const FETCH_POSTS_REQUEST = 'GET_POSTS_REQUEST';
const FETCH_POSTS_FAILURE = 'GET_POSTS_FAILURE';

const getPosts = () => (dispatch) => {
  dispatch(fetchPostsRequest());

  axios({
    method: 'get',
    url: 'http://localhost:3000/posts',
  })
    .then(({ data }) => dispatch(fetchPostsSuccess(data)))
    .catch(err => dispatch(fetchPostsFailure(err)));
};

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailure = (err) => {
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
