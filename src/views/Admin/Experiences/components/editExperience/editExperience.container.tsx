import { connect } from 'react-redux';
import { createExperienceStart } from '@store/experiences/experiences.actions';
import {
  fetchExperiencesStart,
  fetchExperienceByIdStart,
  editExperienceStart,
  uploadExperienceImgStart
} from '@store/experiences/experiences.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onPicAddStart: (imgData, imgCode, formData) =>
    dispatch(uploadExperienceImgStart(imgData, imgCode, formData)),
  onEditExperienceStart: (formData) => dispatch(editExperienceStart(formData)),
  onFetchExperiencesStart: (id) => dispatch(fetchExperiencesStart(id)),
  onFetchExperienceByIdStart: (id) => dispatch(fetchExperienceByIdStart(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
