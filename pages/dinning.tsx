import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';

export default function Dinning() {
  return <WithLayout component={() => <h1>Dinning</h1>} layout={Main} />;
}
