import { connect } from 'react-redux';
import { fetchEnqueriesStart } from '@store/enquiry/enquiry.actions';

const mapStateToProps = (state, props) => ({
  auth: state.auth,
  enquiry: state.enquiry
});

const mapDispatchToProps = (dispatch) => ({
  onFetchEnqueriesStart: () => dispatch(fetchEnqueriesStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
