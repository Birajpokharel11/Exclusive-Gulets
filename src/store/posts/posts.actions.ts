import * as PostsType from './posts.types';

export const fetchPostsStart = ({ page, amount_per_page = 5 }) => ({
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
