import React from 'react';
import { NextPageContext } from 'next';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import HomePage from '@views/Home';

export default function Home({ isIOS }) {
  return <WithLayout component={HomePage} layout={Main} isIOS={isIOS} />;
}

Home.getInitialProps = ({ req }: NextPageContext) => {
  let isIOS = false;
  let userAgent;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent']; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
    isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  }
  return {
    isIOS
  };
};
