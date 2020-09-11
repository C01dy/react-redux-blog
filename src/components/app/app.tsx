import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../header';
import AddPostPage from '../add-post-page';
import PostsPage from '../posts-page';
import { Route, Switch } from 'react-router-dom';

function App() {
  const postsPage = <Route path="/" render={():any => <PostsPage />} exact />;
  const addPostPage = <Route path="/addPost" render={():any => <AddPostPage />} />;

  return (
    <>
      <Header />
      <Container>
        <Switch>
          {postsPage}
          {addPostPage}
        </Switch>
      </Container>
    </>
  );
}

export default App;
