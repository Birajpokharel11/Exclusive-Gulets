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
  onPicAddStart: (imgData, imgCode) =>
    dispatch(uploadExperienceImgStart(imgData, imgCode)),
  onCreateExperienceStart: (formData) =>
    dispatch(createExperienceStart(formData)),
  onFetchExperiencesStart: (id) => dispatch(fetchExperiencesStart(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
