import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
} from '../actions/get-posts-action';
import { IPosts } from '.';

export interface IFetchPostsActionSuccess {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: IPosts;
}

export interface IFetchPostsActionRequest {
  type: typeof FETCH_POSTS_REQUEST;
}

export interface IFetchPostsActionFailure {
  type: typeof FETCH_POSTS_FAILURE;
  payload: string | object;
}

export type fetchPostsTypes =
  | IFetchPostsActionSuccess
  | IFetchPostsActionRequest
  | IFetchPostsActionFailure;
