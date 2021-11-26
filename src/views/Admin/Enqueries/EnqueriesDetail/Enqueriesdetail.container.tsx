import { connect } from 'react-redux';
import {
  fetchEnqueriesByIdStart,
  fetchEnqueriesStart
} from '@store/enquiry/enquiry.actions';

const mapStateToProps = (state) => ({
  auth: state.auth,
  enquiry: state.enquiry.soloEnquiries
});
const mapDispatchToProps = (dispatch) => ({
  onFetchEnqueriesByIdStart: (id) => dispatch(fetchEnqueriesByIdStart(id))
});
const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
