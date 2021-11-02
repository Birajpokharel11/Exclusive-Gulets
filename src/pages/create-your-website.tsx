import WithLayout from '@components/WithLayout';
import CreateWebsiteView from '@views/CreateWebsite';
import Main from '@layouts/Main';

const CreateYourWebsite = (props) => {
  return <WithLayout component={CreateWebsiteView} layout={Main} />;
};

export default CreateYourWebsite;
