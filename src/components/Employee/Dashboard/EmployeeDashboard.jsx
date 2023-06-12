import CabRequestDetails from '../CabRequestDetails/CabRequestDetails.jsx';
import ScheduleCabDialogBox from '../ScheduleCab/ScheduleCabDialogBox.jsx';
import { Container, CabRequests, ScheduleCab } from './EmployeeDashboard.style.js';

// const data = [
//   {
//     id: 1,
//     tabValue: '1',
//     tabTitle: 'New Cab Request',
//     tabContent: <ScheduleCabDialogBox />,
//   },
//   {
//     id: 2,
//     tabValue: '2',
//     tabTitle: 'Requested Cabs',
//     tabContent: <Requests type="employee" />,
//   },
// ];

const EmployeeDashboard = () => {
  return (
    <main className="flex flex-col h-screen">
      <Container>
        <ScheduleCab>
          <ScheduleCabDialogBox />
        </ScheduleCab>
        <CabRequests>
          <header className="heading">Your Scheduled Cabs</header>
          <CabRequestDetails />
        </CabRequests>
      </Container>
    </main>
  );
};

export default EmployeeDashboard;
