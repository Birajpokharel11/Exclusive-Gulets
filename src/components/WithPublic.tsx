/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { RootState } from '@store/root-reducer';

const withPublic = (WrappedComponent) => (props) => {
  // checks whether we are on client / browser or server.
  if (typeof window !== 'undefined') {
    const router = useRouter();

    const { isAuthenticated, loading } = useSelector(
      (state: RootState) => state.auth
    );

    if (isAuthenticated && !loading) {
      router.push('/');
      return null;
    }

    return <WrappedComponent {...props} />;
  }

  // If we are on server, return null
  return null;
};

export default withPublic;
