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


// DeletePostAction
// export interface IDeletePostAction {
//     type: typeof DELETE_POST_SUCCESS,  
//     payload: IPost
// }