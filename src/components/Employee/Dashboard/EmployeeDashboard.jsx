import Header from '../../Admin/Header/index.js';
import Requests from '../../Admin/Requests/index.js';
import CustomTabs from '../../common/CustomTabs/index.js';
import ScheduleCabDialogBox from '../ScheduleCab/ScheduleCabDialogBox.jsx';

const data = [
  {
    id: 1,
    tabValue: '1',
    tabTitle: 'New Cab Request',
    tabContent: <ScheduleCabDialogBox />,
  },
  {
    id: 2,
    tabValue: '2',
    tabTitle: 'Requested Cabs',
    tabContent: <Requests type="employee"/>,
  },
];

const EmployeeDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <CustomTabs data={data} />
    </div>
  );
};

export default EmployeeDashboard;