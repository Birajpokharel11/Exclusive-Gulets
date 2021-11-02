import WithLayout from '@components/WithLayout';
import BrokerSignUpView from '@views/BrokerSignUp';
import Main from '@layouts/Main';

const BrokerSignUp = (props) => {
  return <WithLayout component={BrokerSignUpView} layout={Main} />;
};

export default BrokerSignUp;
