export interface IPosts {
    posts: object,
    fetchingPosts: boolean,
    addedPost: boolean,
    error: null | string | object
}

export interface IPost {
    title: string,
    body: string,
    date: string,
    id: number
}

// Actions
// AddPostAction
export interface IAddPostActionSuccess {
    type: typeof ADD_POST_SUCCESS,  
    payload: IPost
}

export interface IAddPostActionRequest {
    type: typeof ADD_POST_REQUEST,  
}

export interface IAddPostActionFailure {
    type: typeof ADD_POST_FAILURE,  
    payload: string | object
}

// DeletePostAction
export interface IDeletePostAction {
    type: typeof DELETE_POST_SUCCESS,  
    payload: IPost
}