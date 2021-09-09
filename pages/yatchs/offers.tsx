import { useRouter } from 'next/router';
import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import YatchListPage from '@views/YatchList';

export default function Yatch() {
  const router = useRouter();

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <WithLayout component={YatchListPage} layout={Main} />
  );
}
