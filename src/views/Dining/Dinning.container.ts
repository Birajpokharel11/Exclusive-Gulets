import { connect } from 'react-redux';

import { fetchDiningStart } from '@store/dining/dinning.actions';

const mapStateToProps = (state) => ({
  Dining: state.dining.dining.dining
});

const container = connect(mapStateToProps);

export default container;
