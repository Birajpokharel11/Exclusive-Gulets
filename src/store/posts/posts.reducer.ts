import { HYDRATE } from 'next-redux-wrapper';

import * as PostsType from './posts.types';

import { IPostState } from '../interfaces';

const INITIAL_STATE: IPostState = {
  blogIds: [],
  soleBlog: {},
  blogs: {},
  next_page: 1,
  current_page: 0,
  featured_blog: {},
  postsList: [],
  error: null,
  loading: false,
  isCreating: false,
  isEditing: false,
  isDeleting: false,
  uploading: false
};

const PostsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PostsType.FETCH_POSTS_START:
      return {
        ...state,
        loading: true
      };

    case PostsType.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postsList: payload,
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
        soleBlog: payload,
        loading: false
      };

    case PostsType.FETCH_POSTS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case PostsType.CREATE_POST_START:
      return {
        ...state,
        isCreating: true
      };

    case PostsType.CREATE_POST_SUCCESS:
      return {
        ...state,
        isCreating: false
      };

    case PostsType.CREATE_POST_FAILURE:
      return {
        ...state,
        isCreating: false,
        error: payload
      };

    case PostsType.EDIT_POST_START:
      return {
        ...state,
        isEditing: true
      };

    case PostsType.EDIT_POST_SUCCESS:
      return {
        ...state,
        isEditing: false
      };

    case PostsType.EDIT_POST_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: payload
      };

    case PostsType.DELETE_POST_START:
      return {
        ...state,
        isDeleting: true
      };

    case PostsType.DELETE_POST_SUCCESS:
      return {
        ...state,
        isDeleting: false
      };

    case PostsType.DELETE_POST_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: payload
      };

    case PostsType.UPLOAD_POST_START:
      return {
        ...state,
        uploading: true
      };

    case PostsType.UPLOAD_POST_SUCCESS:
      return {
        ...state,
        uploading: false,
        soleBlog: {
          ...state.soleBlog,
          [payload.imgCode]: payload.key
        }
      };

    case PostsType.UPLOAD_POST_FAILURE:
      return {
        ...state,
        uploading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default PostsReducer;
