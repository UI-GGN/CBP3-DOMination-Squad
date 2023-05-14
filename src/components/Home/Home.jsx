import AuthenticationContext from '../../context/AuthenticationContext';
import { useContext } from 'react';

function Home() {
  const [, setAuthenticationContext] = useContext(AuthenticationContext);

  return (
    <>
      <div>
        <h1>on-track!</h1>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem('authToken');
          setAuthenticationContext({
            authToken: null,
          });
        }}
      >
        Log out
      </button>
    </>
  );
}

export default Home;
