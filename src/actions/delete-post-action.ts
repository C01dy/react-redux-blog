import axios from 'axios';
import {ThunkAction} from "redux-thunk";
import {ActionsTypes, IPostsInitialState} from "../types";

const POST_DELETED = 'POST_DELETED';

const deletePost = (id: any):ThunkAction<Promise<void>, IPostsInitialState, any, ActionsTypes> => {
  return async (dispatch: any, getState: any) => {

    await axios({
      method: 'delete',
      url: `http://localhost:4000/posts/${id}`,
    })

      dispatch(postDeleted(id))
  }
};

const postDeleted = (id: any) => {
  return {
    type: POST_DELETED,
    payload: id,
  };
};

export {
  deletePost,
  POST_DELETED,
};
