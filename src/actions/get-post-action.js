const FETCH_POST_SUCCESS = 'GET_POST_SUCCESS';
const FETCH_POST_REQUEST = 'GET_POST_REQUEST';
const FETCH_POST_FAILURE = 'GET_POST_FAILURE';

const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

const fetchPostSuccess = (id) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: id,
  };
};

const fetchPostFailure = (err) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: err,
  };
};