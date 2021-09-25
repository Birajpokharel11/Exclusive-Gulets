import React from 'react';

// import { END } from 'redux-saga';
// import { wrapper } from '@store/index';
// import { fetchPostsStart } from '@store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import BlogsDetails from '@views/Blogs/Details';

export default function NewsBlogs() {
  return <WithLayout component={BlogsDetails} layout={Main} />;
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     if (store.getState()) {
//       store.dispatch(fetchPostsStart());
//       store.dispatch(END);

//       await store.sagaTask?.toPromise();
//       const myStore = store.getState();
//       const posts = myStore.posts;
//       return {
//         props: { posts }
//       };
//     }
//   }
// );
