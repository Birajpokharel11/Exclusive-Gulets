import { useRouter } from 'next/router';
import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import HomePage from '@views/Home';

export default function Home() {
  const router = useRouter();

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <WithLayout component={HomePage} layout={Main} />
  );
}
