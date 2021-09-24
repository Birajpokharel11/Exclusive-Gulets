import * as PostsType from './posts.types';

export const fetchPostsStart = () => ({
  type: PostsType.FETCH_POSTS_START
});

export const fetchPostsSuccess = (result) => ({
  type: PostsType.FETCH_POSTS_SUCCESS,
  payload: result
});

export const fetchPostsFailure = (error) => ({
  type: PostsType.FETCH_POSTS_FAILURE,
  payload: error
});
