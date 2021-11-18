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

export const fetchYachtByIdStart = (id, userid?: any) => ({
  type: YachtsType.FETCH_YACHT_BY_ID_START,
  payload: { id, userid }
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
  type: YachtsType.EDIT_YACHT_FAILURE,
  payload: error
});

export const fetchFlagStart = () => ({
  type: YachtsType.FETCH_FLAG_START
});

export const fetchFlagSuccess = (result) => ({
  type: YachtsType.FETCH_FLAG_SUCCESS,
  payload: result
});

export const fetchFlagFailure = (error) => ({
  type: YachtsType.FETCH_FLAG_FAILURE,
  payload: error
});

export const fetchCountryStart = () => ({
  type: YachtsType.FETCH_COUNTRY_START
});

export const fetchCountrySuccess = (result) => ({
  type: YachtsType.FETCH_COUNTRY_SUCCESS,
  payload: result
});

export const fetchCountryFailure = (error) => ({
  type: YachtsType.FETCH_COUNTRY_FAILURE,
  payload: error
});

export const fetchHomePortStart = () => ({
  type: YachtsType.FETCH_HOMEPORT_START
});

export const fetchHomePortSuccess = (result) => ({
  type: YachtsType.FETCH_HOMEPORT_SUCCESS,
  payload: result
});

export const fetchHomePortFailure = (error) => ({
  type: YachtsType.FETCH_HOMEPORT_FAILURE,
  payload: error
});

export const fetchWaterToysStart = () => ({
  type: YachtsType.FETCH_WATERTOYS_START
});

export const fetchWaterToysSuccess = (result) => ({
  type: YachtsType.FETCH_WATERTOYS_SUCCESS,
  payload: result
});

export const fetchWaterToysFailure = (error) => ({
  type: YachtsType.FETCH_WATERTOYS_FAILURE,
  payload: error
});

export const fetchInclusiveTermStart = () => ({
  type: YachtsType.FETCH_INCLUSIVETERM_START
});

export const fetchInclusiveTermSuccess = (result) => ({
  type: YachtsType.FETCH_INCLUSIVETERM_SUCCESS,
  payload: result
});

export const fetchInclusiveTermFailure = (error) => ({
  type: YachtsType.FETCH_INCLUSIVETERM_FAILURE,
  payload: error
});

export const fetchExtrasStart = () => ({
  type: YachtsType.FETCH_EXTRAS_START
});

export const fetchExtrasSuccess = (result) => ({
  type: YachtsType.FETCH_EXTRAS_SUCCESS,
  payload: result
});

export const fetchExtrasFailure = (error) => ({
  type: YachtsType.FETCH_EXTRAS_FAILURE,
  payload: error
});

export const fetchYachtFeaturesStart = () => ({
  type: YachtsType.FETCH_YACHT_FEATURES_START
});

export const fetchYachtFeaturesSuccess = (result) => ({
  type: YachtsType.FETCH_YACHT_FEATURES_SUCCESS,
  payload: result
});

export const fetchYachtFeaturesFailure = (error) => ({
  type: YachtsType.FETCH_YACHT_FEATURES_FAILURE,
  payload: error
});

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
