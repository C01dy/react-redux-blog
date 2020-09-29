import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/get-posts-action';
import Post from '../post';
import {IPost, IPostsInitialState} from "../../types";

type posts = {
  postsPage: IPostsInitialState
}

const PostsPage = (): any => {
  const dispatch = useDispatch();
  const postsPage = useSelector(
    ({ postsPage: { posts, fetchingPosts, error } }: posts) => {
      return { posts, fetchingPosts, error };
    }
  );
  const { posts, error, fetchingPosts } = postsPage;

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return posts.map(({ body, date, id, title}: IPost) => (
    <Post
      key={id}
      title={title}
      date={date}
      body={body}
      id={id}
      fetchingPosts={fetchingPosts}
      error={error}
    />
  ));

  // return (
  //   <ActionForm/>
  // )
};

export default PostsPage;
