import WithLayout from '@components/WithLayout';
import VerifyTokenView from '@views/VerifyToken';
import Main from '@layouts/Main';

const BrokerSignUp = (props) => {
  return <WithLayout component={() => <VerifyTokenView />} layout={Main} />;
};

export default BrokerSignUp;
