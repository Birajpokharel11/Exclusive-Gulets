import WithLayout from '@components/WithLayout';
import CreateWebsiteView from '@views/CreateWebsite';
import Main from '@layouts/Main';

import { getTenantDomain } from '@utils/data';

export default function CreateYourWebsite() {
  return <WithLayout component={CreateWebsiteView} layout={Main} />;
}

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1, stale-while-revalidate=59'
  );

  const subdomain = await getTenantDomain(req.headers.host);

  if (subdomain) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      host: req.headers.host
    }
  };
};
