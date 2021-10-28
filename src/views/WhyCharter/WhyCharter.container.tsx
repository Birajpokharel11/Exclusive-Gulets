import { connect } from 'react-redux';

import { fetchDiningStart } from '@store/dining/dinning.actions';

const mapStateToProps = (state) => ({
  dining: state.dining.dining.dining,
  slider_image: state.dining.slider_image
});

const container = connect(mapStateToProps);

export default container;
