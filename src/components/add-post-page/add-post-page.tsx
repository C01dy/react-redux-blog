import React from 'react';
import { addPost } from '../../actions/add-post-action';
import ActionForm from '../action-form';

const AddPostPage = (): any => {
  return (
    <ActionForm
      actionHandler={addPost}
      actionBtnText="Добавить новый пост"
      newPostObject={{ title: '', body: '' }}
    />
  );
};

export default AddPostPage;
