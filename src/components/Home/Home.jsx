import Dashboard from '../Admin/Dashboard';
import EmployeeDashboard from '../Employee/Dashboard/EmployeeDashboard';

const Home = () => {
  const userType = localStorage.getItem('authToken');

  return (
    <>
      {userType === 'admin' && <Dashboard />}
      {userType === 'user' && <EmployeeDashboard />}
    </>
  );
};

export default Home;
