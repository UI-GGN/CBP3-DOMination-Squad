import '../App.css';
import Dashboard from './Admin/Dashboard';
import EmployeeDashboard from './Employee/Dashboard/EmployeeDashboard';
import Home from './Home/Home';
import Login from './Login/Login';
import { useIsAuthenticated } from 'react-auth-kit';
import { Routes, Route, Navigate } from 'react-router-dom';

const Private = ({ Component }) => {
  const isAuthenticated = useIsAuthenticated();
  const auth = isAuthenticated();
  return auth ? <Component /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Private Component={Home} />} />
        <Route path="/admin/dashboard" element={<Private Component={Dashboard} />} />
        <Route path="/employee/dashboard" element={<Private Component={EmployeeDashboard} />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
