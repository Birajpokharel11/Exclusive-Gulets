import * as PostsType from './posts.types';

interface IFetchPost {
  page?: number;
  amount_per_page?: number;
  sort_by?: string;
  sort_order?: string;
}

export const fetchPostsStart = (id) => ({
  type: PostsType.FETCH_POSTS_START,
  payload: { id }
});

export const fetchPostsSuccess = (result) => ({
  type: PostsType.FETCH_POSTS_SUCCESS,
  payload: result
});

export const fetchPostsFailure = (error) => ({
  type: PostsType.FETCH_POSTS_FAILURE,
  payload: error
});
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

export const fetchRandomPostsStart = () => ({
  type: PostsType.FETCH_RANDOM_POSTS_START
});

export const fetchRandomPostsSuccess = (result) => ({
  type: PostsType.FETCH_RANDOM_POSTS_SUCCESS,
  payload: result
});

export const fetchRandomPostsFailure = (error) => ({
  type: PostsType.FETCH_RANDOM_POSTS_FAILURE,
  payload: error
});

///////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

export const fetchPostsByIdStart = (id?: string) => ({
  type: PostsType.FETCH_POSTS_BY_ID_START,
  payload: { id }
});

export const fetchPostsByIdSuccess = (result) => ({
  type: PostsType.FETCH_POSTS_BY_ID_SUCCESS,
  payload: result
});

export const fetchPostsByIdFailure = (error) => ({
  type: PostsType.FETCH_POSTS_FAILURE,
  payload: error
});

export const createPostStart = (
  formData,
  mainSelectedFile?: any,
  sideSelectedFile?: any,
  domainName?: any
) => ({
  type: PostsType.CREATE_POST_START,
  payload: { formData, mainSelectedFile, sideSelectedFile, domainName }
});

export const createPostSuccess = () => ({
  type: PostsType.CREATE_POST_SUCCESS
});

export const createPostFailure = (error) => ({
  type: PostsType.CREATE_POST_FAILURE,
  payload: error
});

export const editPostStart = (
  formData,
  mainSelectedFile?: any,
  sideSelectedFile?: any,
  domainName?: any
) => ({
  type: PostsType.EDIT_POST_START,
  payload: { formData, mainSelectedFile, sideSelectedFile, domainName }
});

export const editPostSuccess = () => ({
  type: PostsType.EDIT_POST_SUCCESS
});

export const editPostFailure = (error) => ({
  type: PostsType.EDIT_POST_FAILURE,
  payload: error
});

export const deletePostStart = (id, handleClose) => ({
  type: PostsType.DELETE_POST_START,
  payload: { id, handleClose }
});

export const deletePostSuccess = () => ({
  type: PostsType.DELETE_POST_SUCCESS
});

export const deletePostFailure = (error) => ({
  type: PostsType.DELETE_POST_FAILURE,
  payload: error
});

export const uploadPostImgStart = (imgData, imgCode, formData?: any) => ({
  type: PostsType.UPLOAD_POST_START,
  payload: { imgData, formData, imgCode }
});

export const uploadPostImgSuccess = (imgCode, key) => ({
  type: PostsType.UPLOAD_POST_SUCCESS,
  payload: { imgCode, key }
});

export const uploadPostImgFailure = (error) => ({
  type: PostsType.UPLOAD_POST_FAILURE,
  payload: error
});
