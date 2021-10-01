import { HYDRATE } from 'next-redux-wrapper';

import * as PostsType from './posts.types';

import { IPostState } from '../interfaces';

const INITIAL_STATE: IPostState = {
  blogIds: [],
  blogs: {},
  next_page: 1,
  current_page: 0,
  featured_blog: {},
  postsList: [],
  error: null,
  loading: false
};

const PostsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.posts };

    case PostsType.FETCH_POSTS_START:
      return {
        ...state,
        loading: true
      };

    case PostsType.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postsList: [...state.postsList, ...payload.posts],
        next_page: payload.next_page,
        loading: false
      };

    case PostsType.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case PostsType.FETCH_RANDOM_POSTS_START:
      return {
        ...state,
        loading: true
      };

    case PostsType.FETCH_RANDOM_POSTS_SUCCESS:
      return {
        ...state,
        randomDestination: payload,
        loading: false
      };

    case PostsType.FETCH_RANDOM_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case PostsType.FETCH_POSTS_BY_ID_START:
      return {
        ...state,
        loading: true
      };

    case PostsType.FETCH_POSTS_BY_ID_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false
      };

    case PostsType.FETCH_POSTS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default PostsReducer;
