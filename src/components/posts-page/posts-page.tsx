import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/get-posts-action';
import { addPost } from '../../actions/add-post-action';
import Post from '../post';
import ActionForm from '../action-form';
import { IPost, IPostsInitialState } from '../../types';

type posts = {
  postsPage: IPostsInitialState;
};

const PostsPage = (): any => {
  const dispatch = useDispatch();
  const postsPage = useSelector(
    ({ postsPage: { posts, fetchingPosts, error } }: posts) => {
      return { posts, fetchingPosts, error };
    }
  );
  const { posts, error, fetchingPosts } = postsPage;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {posts.map(({ body, date, id, title }: IPost) => (
        <Post
          key={id}
          title={title}
          date={date}
          body={body}
          id={id}
          fetchingPosts={fetchingPosts}
          error={error}
        />
      ))}
      <ActionForm
        actionHandler={addPost}
        actionBtnText="Добавить новый пост"
        newPostObject={{ title: '', body: '' }}
      />
      
    </>
  );
};

export default PostsPage;
