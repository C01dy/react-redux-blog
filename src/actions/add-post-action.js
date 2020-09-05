import axios from 'axios';

const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

const addPost = (post) => (dispatch) => {
  dispatch(addPostRequest());

  axios({
    method: 'post',
    url: 'http://localhost:3000/posts',
    data: {
      title: post.title,
      body: post.body,
      date: post.date,
      id: post.id,
    },
  })
    .then(({ data }) => dispatch(addPostSuccess(data)))
    .catch(({message}) => dispatch(addPostFailure(message)));

};

const addPostRequest = () => {
  return {
    type: ADD_POST_REQUEST,
  };
};

const addPostSuccess = (post) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: post,
  };
};

const addPostFailure = (err) => {
  return {
    type: ADD_POST_FAILURE,
    payload: err,
  };
};

export { addPost, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE };
