import { connect } from 'react-redux';
import { createExperienceStart } from '@store/experiences/experiences.actions';
import { fetchExperiencesStart } from '@store/experiences/experiences.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  auth: state.auth
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
  onFetchExperiencesStart: (id) => dispatch(fetchExperiencesStart(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
