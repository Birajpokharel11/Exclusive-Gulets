import * as YachtsType from './yachts.types';

export const fetchYachtsStart = () => ({
  type: YachtsType.FETCH_YACHTS_START
});

export const fetchYachtsSuccess = (result) => ({
  type: YachtsType.FETCH_YACHTS_SUCCESS,
  payload: result
});

export const fetchYachtsFailure = (error) => ({
  type: YachtsType.FETCH_YACHTS_FAILURE,
  payload: error
});

export const fetchAdminYachtsStart = () => ({
  type: YachtsType.FETCH_ADMIN_YACHTS_START
});

export const fetchAdminYachtsSuccess = (result) => ({
  type: YachtsType.FETCH_ADMIN_YACHTS_SUCCESS,
  payload: result
});

export const fetchAdminYachtsFailure = (error) => ({
  type: YachtsType.FETCH_ADMIN_YACHTS_FAILURE,
  payload: error
});

export const fetchYachtByIdStart = (id) => ({
  type: YachtsType.FETCH_YACHT_BY_ID_START,
  payload: { id }
});

export const fetchYachtByIdSuccess = (result) => ({
  type: YachtsType.FETCH_YACHT_BY_ID_SUCCESS,
  payload: result
});

export const fetchYachtByIdFailure = (error) => ({
  type: YachtsType.FETCH_YACHT_BY_ID_FAILURE,
  payload: error
});

export const createYachtStart = (formData) => ({
  type: YachtsType.CREATE_YACHT_START,
  payload: { formData }
});

export const createYachtSuccess = () => ({
  type: YachtsType.CREATE_YACHT_SUCCESS
});

export const createYachtFailure = (error) => ({
  type: YachtsType.CREATE_YACHT_FAILURE,
  payload: error
});

export const editYachtStart = (formData) => ({
  type: YachtsType.EDIT_YACHT_START,
  payload: { formData }
});

export const editYachtSuccess = () => ({
  type: YachtsType.EDIT_YACHT_SUCCESS
});

export const editYachtFailure = (error) => ({
  type: YachtsType.EDIT_YACHT_FAILURE
});
///////////////////////////////////////////////////////////////
export const addPictureStart = (formData) => ({
  type: YachtsType.ADD_PIC_START,
  payload: formData
});

export const addPictureSuccess = (result) => ({
  type: YachtsType.ADD_PIC_SUCCESS,
  payload: result
});

export const addPictureStop = (error) => ({
  type: YachtsType.CREATE_YACHT_FAILURE,
  payload: error
});
