import CabRequestDetails from '../CabRequestDetails/CabRequestDetails.jsx';
import { Container, CabRequests } from './EmployeeDashboard.style.js';
import EmployeeNavBar from './EmployeeNavBar.jsx';
const EmployeeDashboard = () => {
  return (
    <main>
      <EmployeeNavBar />
      <Container>
        <CabRequests>
          <CabRequestDetails />
        </CabRequests>
      </Container>
    </main>
  );
};

export default EmployeeDashboard;
