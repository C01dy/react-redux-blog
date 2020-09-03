import axios from 'axios';
import { getPosts } from './get-posts-action';

const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

const addPost = async (post) => {

  await axios({
    method: 'post',
    url: 'http://localhost:3000/posts',
    data: {
        title: post.title,
        body: post.body,
        date: post.date,
        id: post.id
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));

    getPosts();
};

const addPostRequest = () => {
  return {
    type: ADD_POST_REQUEST,
  };
};

const addPostSuccess = (posts) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: posts,
  };
};

const addPostFailure = (err) => {
  return {
    type: ADD_POST_FAILURE,
    payload: err,
  };
};

export {
    addPost
}