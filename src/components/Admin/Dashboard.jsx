import CustomTabs from '../common/CustomTabs';
import Header from './Header';
import Requests from './Requests';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [headerTitle, setHeaderTitle] = useState('Requests and Routes');

  const onTriggerValueChange = (value) => {
    setHeaderTitle(value);
  };

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen">
      <Header headerTitle={headerTitle} onPress={handleOnClick} />
      <CustomTabs data={data} onTriggerValueChange={onTriggerValueChange} />
    </div>
  );
};

export default Dashboard;
