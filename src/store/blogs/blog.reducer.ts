import { HYDRATE } from 'next-redux-wrapper';

import * as BlogType from './blog.types';
const INITIAL_STATE = {
  blogIds: [],
  blogs: [],
  next_page: 0,
  current_page: 0,
  featured_blog: {},
  error: null,
  loading: false
};

const blogReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.blogs };
    case BlogType.FETCH_BLOG_START:
      return {
        ...state,
        loading: true
      };

    case BlogType.FETCH_BLOG_SUCCESS:
      return {
        ...state,
        blogs: payload,
        loading: false
      };

    case BlogType.FETCH_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default blogReducer;
