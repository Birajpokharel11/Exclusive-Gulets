import WithLayout from '@components/WithLayout';
import DashboardView from '@views/Dashboard';
import Admin from '@layouts/Admin';

const Dashboard = (props) => {
  return <WithLayout component={DashboardView} layout={Admin} />;
};

export default Dashboard;
