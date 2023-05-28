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
    tabTitle: 'Cab Requests by you',
    tabContent: <Requests type="employee"/>,
  },
];

const EmployeeDashboard = () => {
  return (
    // <Container>
    //   <div className="flex flex-row h-10 ml-3 w-center justify-start">
    //     <div className="text-base mt-2 mr-2">onTrack</div>
    //     <img className="h-20 w-20 mr-2" src={Logo} alt="logo" />
    //   </div>
    //
    //   <div className="flex flex-col justify-between items-center">
    //     <ScheduleCabDialogBox />
    //   </div>
    // </Container>
    <div className="flex flex-col h-screen">
      <Header />
      <CustomTabs data={data} />
    </div>
  );
};

export default EmployeeDashboard;