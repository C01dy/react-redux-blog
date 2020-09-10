import {
  ADD_POST_SUCCESS,
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
} from '../actions/add-post-action';
import { IPost } from '.';

export interface IAddPostActionSuccess {
  type: typeof ADD_POST_SUCCESS;
  payload: IPost;
}

export interface IAddPostActionRequest {
  type: typeof ADD_POST_REQUEST;
}

export interface IAddPostActionFailure {
  type: typeof ADD_POST_FAILURE;
  payload: string | object;
}

export type addPostTypes =
  | IAddPostActionSuccess
  | IAddPostActionRequest
  | IAddPostActionFailure;
