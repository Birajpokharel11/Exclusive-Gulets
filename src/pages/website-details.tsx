import WithLayout from '@components/WithLayout';
import WebsiteDetailsView from '@views/WebsiteDetails';
import Main from '@layouts/Main';

const WebsiteDetails = (props) => {
  return <WithLayout component={WebsiteDetailsView} layout={Main} />;
};

export default WebsiteDetails;
