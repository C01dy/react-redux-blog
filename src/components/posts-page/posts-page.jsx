import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/get-posts-action';
import Post from '../post';

const PostsPage = ({  onGetPosts  }) => {
  const dispatch = useDispatch();
  const postsPage = useSelector(({ postsPage: { posts, isFetching, error } }) => {
    return { posts, isFetching, error };
  })
  const {posts, error, isFetching} = postsPage;

  onGetPosts = () => dispatch(getPosts())

  useEffect(() => {
    onGetPosts();
  }, []);


  return posts.map(({ title, date, id, body }) => (
    <Post
      key={id}
      title={title}
      date={date}
      body={body}
      id={id}
      isFetching={isFetching}
      error={error}
    />
  ));
};

export default PostsPage;
