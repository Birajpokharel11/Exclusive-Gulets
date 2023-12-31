import { connect } from 'react-redux';
import { addPictureStart, editYachtStart } from '@store/yachts/yachts.actions';
const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  yacht: state.yacht
});

const mapDispatchToProps = (dispatch) => ({
  onEditYachtStart: (formData) => dispatch(editYachtStart(formData)),
  onPicAddStart: (formData, imgCode) =>
    dispatch(addPictureStart(formData, imgCode))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
