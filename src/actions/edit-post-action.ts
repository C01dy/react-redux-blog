import { ActionsTypes, IPost, IPostsInitialState } from '../types';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
const POST_EDITED = 'POST_EDITED';

const editPost = (
  post: IPost
): ThunkAction<Promise<void>, IPostsInitialState, any, ActionsTypes> => {
  return async (dispatch: any) => {
    await axios({
      method: 'put',
      url: `http://localhost:4000/posts/${post.id}`,
      data: {
        ...post,
        title: post.title,
        body: post.body,
      },
    });
    dispatch(postEdited(post));
  };
};

const postEdited = (post: any) => {
  console.log(post)
  return {
    type: POST_EDITED,
    payload: post,
  };
};

export { POST_EDITED, editPost };
