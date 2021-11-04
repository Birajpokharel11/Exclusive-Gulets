import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const container = connect(mapStateToProps, null);

export default container;
