import React, { useEffect, useState } from 'react';
import './app.css';
import { Container } from '@material-ui/core';
import { addPost } from '../../actions/add-post-action';
import { getPosts } from '../../actions/get-posts-action';
import Header from '../header/header';
import Post from '../post/post';
import { connect } from 'react-redux';

function App({ onGetPosts, posts, isFetching, error }) {
  const add = () => {
    const newPost = {
      title: 'Redux',
      body: 'dl,slfsdfksdf',
      date: 'September 17, 2020',
      id: 230,
    };

    addPost(newPost);
  };

  useEffect(() => {
    onGetPosts();
  }, [onGetPosts]);

  return (
    <div className="app">
      <Header />

      <Container>
        <button onClick={add}>Add post</button>
        {posts.map(({ title, date, id }) => (
          <Post key={id} title={title} date={date} />
        ))}
      </Container>
    </div>
  );
}

const mapStateToProps = ({ postsPage: { posts, isFetching, error } }) => {
  return { posts, isFetching, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => dispatch(getPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
