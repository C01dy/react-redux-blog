import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/get-posts-action';
import Post from '../post';

const PostsPage = ({ posts, onGetPosts, isFetching, error }) => {
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

const mapStateToProps = ({ postsPage: { posts, isFetching, error } }) => {
  return { posts, isFetching, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
