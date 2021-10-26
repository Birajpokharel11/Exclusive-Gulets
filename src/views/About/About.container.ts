import { connect } from 'react-redux';

import { fetchDiningStart } from '@store/dining/dinning.actions';

const mapStateToProps = (state) => ({
  About: state.about
});

const container = connect(mapStateToProps);

export default container;
