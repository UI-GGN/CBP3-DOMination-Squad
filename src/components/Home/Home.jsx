import AuthenticationContext from '../../context/AuthenticationContext';
import { useContext } from 'react';

const Home = () => {
  const [, setAuthenticationContext] = useContext(AuthenticationContext);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="text-3xl font-bold">
        <h1>on-track!</h1>
      </div>
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
    </div>
  );
};

export default Home;
