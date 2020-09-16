import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
const POST_EDITED = 'POST_EDITED';

const editPost = (post: any): ThunkAction<Promise<void>, any, any, any> => {
  return async (dispatch: any, getState: any) => {
    await axios({
      method: 'put',
      url: `http://localhost:4000/posts/${post.id}`,
      data: {
        title: post.title,
        body: post.body,
        date: post.date,
        id: post.id,
      },
    });
    dispatch(postEdited(post.id));
    console.log(post.id)
  };
};

const postEdited = (post: any) => {
  return {
    type: POST_EDITED,
    payload: post,
  };
};

export { POST_EDITED, editPost };
