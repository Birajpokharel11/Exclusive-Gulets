import { connect } from 'react-redux';
import {
  createExperienceStart,
  fetchExperiencesStart,
  uploadExperienceImgStart
} from '@store/experiences/experiences.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onPicAddStart: (formData, imgCode) =>
    dispatch(uploadExperienceImgStart(formData, imgCode)),
  onCreateExperienceStart: (formData) =>
    dispatch(createExperienceStart(formData)),
  onFetchExperiencesStart: (id) => dispatch(fetchExperiencesStart(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
