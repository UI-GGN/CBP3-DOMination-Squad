import CustomTabs from '../common/CustomTabs';
import Header from './Header';
import Requests from './Requests';
import { useState } from 'react';

const data = [
  {
    id: 1,
    tabValue: 'Requests',
    tabTitle: 'Requests',
    tabContent: <Requests type={'admin'} />,
  },
  {
    id: 2,
    tabValue: 'Routes',
    tabTitle: 'Routes',
    tabContent: <h1>Routes</h1>,
  },
];

const Dashboard = () => {
  const [headerTitle, setHeaderTitle] = useState('Requests and Routes');

  const onTriggerValueChange = (value) => {
    setHeaderTitle(value);
  };
  return (
    <div className="flex flex-col h-screen">
      <Header headerTitle={headerTitle} />
      <CustomTabs data={data} onTriggerValueChange={onTriggerValueChange} />
    </div>
  );
};

export default Dashboard;
