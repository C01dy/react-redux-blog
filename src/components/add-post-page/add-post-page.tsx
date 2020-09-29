import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/add-post-action';
import { Redirect } from 'react-router-dom';
import ActionForm from '../action-form';


const AddPostPage = ():any => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState<boolean>(false);

  if (redirect) {
    return <Redirect from="/addPost" to="/" />;
  } else {
    return (
     <ActionForm actionHandler={addPost} actionBtnText="Добавить новый пост" newPostObject={{title: '', body: ''}}/>
    )
  }
};

export default AddPostPage;
