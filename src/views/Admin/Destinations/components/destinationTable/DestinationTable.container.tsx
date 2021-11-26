import { connect } from 'react-redux';
import { deleteDestinationStart } from '@store/destination/destination.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteDestinationStart: (id, handleClose) =>
    dispatch(deleteDestinationStart(id, handleClose))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
