import React from 'react';
import { Container, Button } from '@material-ui/core';
import Header from '../header';
import AddPostPage from '../add-post-page';
import PostsPage from '../posts-page';
import { Route, Switch } from 'react-router-dom';
// import { editPost } from '../../actions/edit-post-action';
import axios from 'axios'

const App = () => {
  const edit = (): void => {
    axios({
      method: 'put',
      url: `http://localhost:4000/posts/f4d4ad54`,
      data: {
        title: 'WOWOWOOWOW',
        body: 'WIWIWWII',
        date: '17.09.2020',
        id: 'f4d4ad54',
      },
    });
  };

  return (
    <>
      <Header />
      <Button onClick={edit}>edit</Button>
      <Container>
        <Switch>
          <Route path="/" component={PostsPage} exact />;
          <Route path="/addPost" component={AddPostPage} />;
        </Switch>
      </Container>
    </>
  );
};

export default App;
