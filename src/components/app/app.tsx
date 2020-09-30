import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../header';
import PostsPage from '../posts-page';
const App = () => {

  return (
    <>
      <Header />
      <Container>
        <PostsPage/>
      </Container>
    </>
  );
};

export default App;
