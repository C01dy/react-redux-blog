import React, { useEffect } from 'react';
import './app.css';
import { Container } from '@material-ui/core';
import { addPost } from '../../actions/add-post-action';
import { getPosts } from '../../actions/get-posts-action';
import Header from '../header/header';
import Post from '../post/post';
import { connect } from 'react-redux';

function App({ onGetPosts, onAddPost, posts, isFetching, error }) {
  const add = async () => {
    const newPost = {
      title: 'Pug',
      body: 'dl,slfsdfksdf',
      date: 'September 17, 2020',
      id: Math.floor(Math.random() * 54),
    };

    onAddPost(newPost);

  };

  useEffect(() => {
    onGetPosts();
  }, []);

  return (
    <div className="app">
      <Header />
      <button onClick={add}>Push</button>
      <Container>
        {posts.map(({ title, date, id, body }) => (
          <Post key={id} title={title} date={date} body={body}  id={id}/>
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
    onAddPost: (post) => dispatch(addPost(post)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
