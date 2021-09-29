import React from 'react';
import { Limits, BlogSort } from '@utils/enums';
import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import Blogs from '@views/Blogs';
import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchBlogStart } from '@store/blogs/blog.actions';

export default function Experiences() {
  return <WithLayout component={Blogs} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    if (store.getState()) {
      store.dispatch(
        fetchBlogStart({
          ...BlogSort,
          page: 1,
          amount_per_page: Limits.BLOGS_PER_PAGE
        })
      );
      store.dispatch(END);

      await store.sagaTask?.toPromise();
      return {
        props: {}
      };
    }
  }
);
