import AuthenticationContext from '../../context/AuthenticationContext';
import Dashboard from '../Admin/Dashboard';
import { useContext } from 'react';

const Home = () => {
  const [, setAuthenticationContext] = useContext(AuthenticationContext);

  return (
    <div className="h-screen">
      <Dashboard />
      <button
        className="bg-gray-500 text-white	font-bold rounded-3xl w-40 hover:bg-gray-900 pt-2 pb-2 m-8"
        onClick={() => {
          localStorage.removeItem('authToken');
          setAuthenticationContext({
            authToken: null,
          });
        }}
      >
        Log out
      </button>
      z
    </div>
  );
};

export default Home;
