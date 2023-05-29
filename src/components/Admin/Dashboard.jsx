import CustomTabs from '../common/CustomTabs';
import Header from './Header';
import Requests from './Requests';

const data = [
  {
    id: 1,
    tabValue: '1',
    tabTitle: 'Requests',
    tabContent: <Requests type={'admin'} />,
  },
  {
    id: 2,
    tabValue: '2',
    tabTitle: 'Routes',
    tabContent: <h1>Routes</h1>,
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <CustomTabs data={data} />
    </div>
  );
};

export default Dashboard;
