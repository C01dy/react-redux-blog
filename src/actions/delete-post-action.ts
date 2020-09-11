import axios from 'axios';

const POST_DELETED = 'POST_DELETED';

const deletePost = (id: number) => {
  return (dispatch: any) => {

    axios({
      method: 'delete',
      url: `http://localhost:4000/posts/${id}`,
    })
        .then((post) => {
          dispatch(postDeleted(post))
        })

  }
};

const postDeleted = (post: any) => {
  return {
    type: POST_DELETED,
    payload: post,
  };
};

export {
  deletePost,
  POST_DELETED,
};
