import { useRouter } from 'next/router';
import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import YatchDetailsPage from '@views/YatchDetails';

export default function Slug() {
  const router = useRouter();

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <WithLayout component={YatchDetailsPage} layout={Main} />
  );
}
