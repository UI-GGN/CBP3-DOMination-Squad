import AuthenticationContext from '../../context/AuthenticationContext';
import Dashboard from '../Admin/Dashboard';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const CustomRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

const Authenticator = () => {
  const [context] = useContext(AuthenticationContext);

  return <>{context.authToken === null ? <Login /> : <CustomRouter />}</>;
};

export default Authenticator;
