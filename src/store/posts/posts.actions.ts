import * as PostsType from './posts.types';

interface IFetchPost {
  page?: number;
  amount_per_page?: number;
  sort_by?: string;
  sort_order?: string;
}

export const fetchPostsStart = (data?: IFetchPost) => ({
  type: PostsType.FETCH_POSTS_START,
  payload: data
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
