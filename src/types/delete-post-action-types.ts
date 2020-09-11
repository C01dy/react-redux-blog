import {
    POST_DELETED
  } from '../actions/delete-post-action';

export interface IDeletePostAction {
    type: typeof POST_DELETED,  
    payload: number
}

export type deleteType = IDeletePostAction

