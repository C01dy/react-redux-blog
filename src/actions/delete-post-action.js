import axios from 'axios';

const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

const deletePost = (id) => (dispatch) => {
  dispatch(deletePostRequest());

  axios({
    method: 'delete',
    url: `http://localhost:3000/posts/${id}`,
  })
    .then((post) => {
      dispatch(deletePostSuccess(post))
    })
    .catch(({ message }) => dispatch(deletePostFailure(message)));

};

const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST,
  };
};

const deletePostSuccess = (post) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: post,
  };
};

const deletePostFailure = (errMsg) => {
  return {
    type: DELETE_POST_FAILURE,
    payload: errMsg,
  };
};

export {
  deletePost,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
};
