import { connect } from 'react-redux';

import { fetchDiningStart } from '@store/dining/dinning.actions';

const mapStateToProps = (state) => ({
  charter_content: state.about.charter_content,
  general_content: state.about.general_content,
  charter_images: state.about.why_charter_images
});

const container = connect(mapStateToProps);

export default container;
