import React from 'react';
import axios from 'axios';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsByIdStart } from '@store/posts/posts.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import BlogsDetails from '@views/Blogs/Details';

import Admin from '@layouts/Admin';
import withAuth from '@components/WithAuth';

function EnquiryPage() {
  return (
    <WithLayout
      component={() => <div>Hello Enquery</div>}
      layout={Admin}
      context
    />
  );
}

const WrappedPage = withAuth(EnquiryPage, ['ROLE_BROKER']);

export default WrappedPage;
