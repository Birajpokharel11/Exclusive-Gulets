import React from 'react';

interface Props {
  component: React.FC;
  layout: React.FC;
  [key: string]: any;
}

const WithLayout = (props: Props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
};

export default WithLayout;
