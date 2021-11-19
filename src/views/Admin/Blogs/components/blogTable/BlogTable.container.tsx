import { connect } from 'react-redux';
import {
  createExperienceStart,
  deleteExperienceStart
} from '@store/experiences/experiences.actions';

import { deletePostStart } from '@store/posts/posts.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteExperienceStart: (id, handleClose) =>
    dispatch(deletePostStart(id, handleClose))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
