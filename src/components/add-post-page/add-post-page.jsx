import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/add-post-action';
import { TextField, FormControl, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '1.5em 0',
  },
  field: {
    marginTop: '2em',
  },
}));

const AddPostPage = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [redirect, setRedirect] = useState(false);

  const onAddPost = (post) => dispatch(addPost(post))

  const bodyHandleChange = (e) => {
    setBody(e.target.value);
  };
  const titleHandleChange = (e) => {
    setTitle(e.target.value);
  };
  const formatedDate = () => {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth();
    let yy = date.getFullYear();
    return `${dd < 10 ? '0' + dd : dd}.${mm < 10 ? '0' + mm : mm}.${yy}`;
  };

  const add = () => {
    const newPost = {
      title,
      body,
      date: formatedDate(),
      id: Math.floor(Math.random() * 54),
    };
    onAddPost(newPost);
    setBody('');
    setTitle('');
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect from="/addPost" to="/" />;
  } else {
    return (
      <FormControl className={styles.root}>
        <TextField
          className={styles.field}
          id="standard-basic"
          label="Тема поста"
          value={title}
          onChange={titleHandleChange}
        />
        <TextField
          className={styles.field}
          id="standard-multiline-flexible"
          label="Содержимое поста"
          multiline
          value={body}
          onChange={bodyHandleChange}
        />
        <Button
          onClick={add}
          variant="contained"
          color="primary"
          className={styles.field}
        >
          Добавить пост
        </Button>
      </FormControl>
    );
  }
};

export default AddPostPage;
