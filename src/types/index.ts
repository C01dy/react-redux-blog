import { addPostTypes } from './add-post-action-types';
import { fetchPostsTypes } from './fetch-posts-action-types';
import { deleteType } from './delete-post-action-types';


export interface IPostsInitialState {
    posts: Array<IPost>,
    fetchingPosts: boolean,
    addedPost?: boolean,
    error: any
}

export interface IPost {
    body: string,
    date: string,
    id: any
    title: string,
}

export type ActionsTypes = addPostTypes | fetchPostsTypes | deleteType


// DeletePostAction
