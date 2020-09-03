import React, { useEffect } from 'react';
import './app.css';
import { Container } from '@material-ui/core';
import { addPost } from '../../actions/add-post-action';
import { getPosts } from '../../actions/get-posts-action';
import Header from '../header/header';
import Post from '../post/post';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import AddPostPage from '../add-post-page/add-post-page';

function App({ onGetPosts, onAddPost, posts, isFetching, error }) {
  const add = async () => {
    const newPost = {
      title: 'Pug',
      body: 'dl,slfsdfksdf',
      date: 'September 17, 2020',
      id: Math.floor(Math.random() * 54),
    };

    await onAddPost(newPost);
    onGetPosts();
  };

  useEffect(() => {
    onGetPosts();
  }, []);

  return (
    <div className="app">
      <Header />

      <Container>
        <button onClick={add}>Add post</button>
        {posts.map(({ title, date, id, body }) => (
          <Post key={id} title={title} date={date} body={body} />
        ))}

        <Route 
          path="/add_post"
          render={() => <AddPostPage/>}
        />
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
