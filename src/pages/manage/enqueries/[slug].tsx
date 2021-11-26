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
import { fetchEnqueriesByIdStart } from '@store/enquiry/enquiry.actions';
import EnquiryForm from '@views/Admin/Enqueries/EnqueriesDetail/Enqueriesdetail.component';

function EnquiryPage() {
  return <WithLayout component={EnquiryForm} layout={Admin} context />;
}

const WrappedPage = withAuth(EnquiryPage, ['ROLE_BROKER']);

export default WrappedPage;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res, ...context }) => {
//       console.log('Hello', context.params.slug);
//       store.dispatch(fetchEnqueriesByIdStart(context.params.slug));

//       store.dispatch(END);

//       await store.sagaTask?.toPromise();
//       return {
//         props: {}
//       };
//     }
// );
