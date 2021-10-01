import * as PostsType from './posts.types';

export const fetchPostsStart = ({ page = 1, amount_per_page = 1 }) => ({
  type: PostsType.FETCH_POSTS_START,
  payload: { page, amount_per_page }
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

export const fetchPostsByIdStart = (id) => ({
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
