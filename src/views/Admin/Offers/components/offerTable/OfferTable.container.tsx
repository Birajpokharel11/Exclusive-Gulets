import { connect } from 'react-redux';

import { deleteGenericOfferStart } from '@store/offer/offer.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  offer: state.offer
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteGenericOfferStart: (id, handleClose) =>
    dispatch(deleteGenericOfferStart(id, handleClose))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
