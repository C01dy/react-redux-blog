import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { formatedDate, genId } from '../../helpers';
import { makeStyles } from '@material-ui/core/styles';
import { IPost } from '../../types';
import { TextField, FormControl, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '1.5em 0',
  },
  field: {
    marginTop: '2em',
  },
}));

const ActionForm = ({ actionHandler, actionBtnText, newPostObject }: any) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const [title, setTitle] = useState<string>(newPostObject.title);
  const [body, setBody] = useState<string>(newPostObject.body);

  const bodyHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log('body changed');
    setBody(e.target.value);
  };
  const titleHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(newPostObject);
    setTitle(e.target.value);
  };

  const newPost = (): any => {
    if (newPostObject) {
      return {
        ...newPostObject,
        title,
        body,
        date: formatedDate(),
      };
    } else {
      return {
        body,
        title,
        id: genId(),
        date: formatedDate(),
      };
    }
  };

  const makeNewPost = (): void => {
    dispatch(actionHandler(newPost()));
    setBody('');
    setTitle('');
  };
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
        onClick={makeNewPost}
        variant="contained"
        color="primary"
        className={styles.field}
      >
        {actionBtnText}
      </Button>
    </FormControl>
  );
};

export default ActionForm;
