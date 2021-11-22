import { connect } from 'react-redux';
import { createPostStart } from '@store/posts/posts.actions';
import { editBrokerProfileStart } from '@store/auth/auth.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePostStart: (
    formData,
    mainSelectedFile,
    sideSelectedFile,
    domainName
  ) =>
    dispatch(
      createPostStart(formData, mainSelectedFile, sideSelectedFile, domainName)
    ),
  onEditBrokerProfileStart: (formData) =>
    dispatch(editBrokerProfileStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
