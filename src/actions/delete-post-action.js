const DELETE_POST_SUCCESS = 'GET_POST_SUCCESS';
const DELETE_POST_REQUEST = 'GET_POST_REQUEST';
const DELETE_POST_FAILURE = 'GET_POST_FAILURE';

const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST,
  };
};

const deletePostSuccess = (id) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: id,
  };
};

const deletePostFailure = (err) => {
  return {
    type: DELETE_POST_FAILURE,
    payload: err,
  };
};