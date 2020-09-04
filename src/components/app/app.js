import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { getPosts } from '../../actions/get-posts-action';
import Header from '../header';
import Post from '../post';
import { connect } from 'react-redux';
import AddPostPage from '../add-post-page';

function App({ onGetPosts, onAddPost, posts, isFetching, error }) {

  useEffect(() => {
    onGetPosts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {posts.map(({ title, date, id, body }) => (
          <Post key={id} title={title} date={date} body={body} id={id} />
        ))}
        <AddPostPage/>
      </Container>
    </>
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
