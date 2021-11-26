import WithLayout from '@components/WithLayout';
import DashboardView from '@views/Dashboard';
import Admin from '@layouts/Admin';
import withAuth from '@components/WithAuth';

const Dashboard = (props) => {
  return <WithLayout component={DashboardView} layout={Admin} />;
};

const WrappedPage = withAuth(Dashboard);

export default WrappedPage;
