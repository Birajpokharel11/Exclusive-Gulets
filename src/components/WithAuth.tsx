/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { RootState } from '@store/root-reducer';

import SimpleBackdrop from './SpinnerOverlay';

const withAuth = (WrappedComponent, roles) => (props) => {
  // checks whether we are on client / browser or server.
  if (typeof window !== 'undefined') {
    const router = useRouter();

    const { isAuthenticated, loading, currentUser } = useSelector(
      (state: RootState) => state.auth
    );

    if (loading && !isAuthenticated) {
      return <SimpleBackdrop />;
    }

    if (!isAuthenticated && !loading) {
      // not logged in so redirect to login page with the return url
      router.push('/login');
      return null;
    }

    // check if route is restricted by role
    if (roles && roles.indexOf(currentUser.role) === -1) {
      // role not authorised so redirect to home page
      router.push('/');
      return null;
    }

    return <WrappedComponent {...props} />;
  }

  // If we are on server, return null
  return null;
};

export default withAuth;
