import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import DestinationPage from '@views/Destinations';
import { fetchDestinationStart } from '@store/destination/destination.actions';
import { DestinationSort, Limits } from '@utils/enums';

const Destinations = (props) => {
  const { onFetchDestinationStart } = props;
  useEffect(() => {
    onFetchDestinationStart({
      ...DestinationSort,
      page: 1,
      amount_per_page: Limits.DESTINATIONS_PER_PAGE
    });
  }, []);
  return <WithLayout component={DestinationPage} layout={Main} />;
};

const mapStateToProps = (state, props) => ({
  destination: state.destination
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDestinationStart: (data) => dispatch(fetchDestinationStart(data))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container(Destinations);
