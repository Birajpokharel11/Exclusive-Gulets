import { connect } from 'react-redux';
import { createPostStart, fetchPostsStart } from '@store/posts/posts.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
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
    )
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
