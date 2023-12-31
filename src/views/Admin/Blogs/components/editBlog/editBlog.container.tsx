import { connect } from 'react-redux';
import {
  fetchPostsByIdStart,
  editPostStart,
  uploadPostImgStart
} from '@store/posts/posts.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onFetchPostsByIdStart: (id) => dispatch(fetchPostsByIdStart(id)),
  onEditPostStart: (formData, mainSelectedFile, sideSelectedFile, domainName) =>
    dispatch(
      editPostStart(formData, mainSelectedFile, sideSelectedFile, domainName)
    ),
  onPicAddStart: (imgData, imgCode, formData) =>
    dispatch(uploadPostImgStart(imgData, imgCode, formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
