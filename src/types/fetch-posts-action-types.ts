import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
} from '../actions/get-posts-action';
import {IPost} from "./index";

export interface IFetchPostsActionSuccess {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Array<IPost>;
}

export interface IFetchPostsActionRequest {
  type: typeof FETCH_POSTS_REQUEST;
}

export interface IFetchPostsActionFailure {
  type: typeof FETCH_POSTS_FAILURE;
  payload: any;
}

export type fetchPostsTypes =
  | IFetchPostsActionSuccess
  | IFetchPostsActionRequest
  | IFetchPostsActionFailure;
