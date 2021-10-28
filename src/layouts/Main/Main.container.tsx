import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  alert: state.alert
});

const container = connect(mapStateToProps, null);

export default container;
