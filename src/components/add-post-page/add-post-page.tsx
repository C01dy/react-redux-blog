import React, { useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/add-post-action';
import { TextField, FormControl, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { IPost } from '../../types';

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
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);

  const onAddPost = (post: IPost) => dispatch(addPost(post));

  const bodyHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBody(e.target.value);
  };
  const titleHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const formatedDate = (): string => {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth();
    let yy = date.getFullYear();
    return `${dd < 10 ? '0' + dd : dd}.${mm < 10 ? '0' + mm : mm}.${yy}`;
  };

  const add = (): void => {
    const newPost: IPost = {
      body,
      date: formatedDate(),
      id: Math.floor(Math.random() * 54),
      title,
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
