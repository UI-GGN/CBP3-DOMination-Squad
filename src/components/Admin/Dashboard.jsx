import Header from '../Admin/Header';
import Requests from '../Admin/Requests';
import CustomTabs from '../common/CustomTabs/CustomTabs';

const data = [
  {
    id: 1,
    tabValue: '1',
    tabTitle: 'Requests',
    tabContent: <Requests />,
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
