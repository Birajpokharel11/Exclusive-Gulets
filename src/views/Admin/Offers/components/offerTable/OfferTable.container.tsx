import { connect } from 'react-redux';
import {
  createExperienceStart,
  deleteExperienceStart
} from '@store/experiences/experiences.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  offer: state.offer
});

const mapDispatchToProps = (dispatch) => ({
  onCreateExperienceStart: (
    formData,
    mainSelectedFile,
    sideSelectedFile,
    domainName
  ) =>
    dispatch(
      createExperienceStart(
        formData,
        mainSelectedFile,
        sideSelectedFile,
        domainName
      )
    ),
  onDeleteExperienceStart: (id, handleClose) =>
    dispatch(deleteExperienceStart(id, handleClose))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
