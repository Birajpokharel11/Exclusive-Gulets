import { connect } from 'react-redux';

import { submitDestinationStart } from '@store/destination/destination.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  auth: state.auth,
  yacht: state.yacht
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitDestinationStart: (formData) =>
    dispatch(submitDestinationStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
