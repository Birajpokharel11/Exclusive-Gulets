import * as BlogType from './blog.types';

export const fetchBlogStart = (data) => ({
  type: BlogType.FETCH_BLOG_START,
  payload: data
});

export const fetchBlogSuccess = (result) => ({
  type: BlogType.FETCH_BLOG_SUCCESS,
  payload: result
});

export const fetchBlogFailure = (error) => ({
  type: BlogType.FETCH_BLOG_FAILURE,
  payload: error
});
