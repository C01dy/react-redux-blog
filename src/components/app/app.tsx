import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../header';
import AddPostPage from '../add-post-page';
import PostsPage from '../posts-page';
import { Route, Switch } from 'react-router-dom';
const App = () => {

  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={PostsPage} exact />
          <Route path="/addPost" component={AddPostPage} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
