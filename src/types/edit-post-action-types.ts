import { POST_EDITED } from '../actions/edit-post-action';
import { IPost } from '.';

export interface IEditPostAction {
  type: typeof POST_EDITED;
  payload: IPost;
}

export type editType = IEditPostAction;
