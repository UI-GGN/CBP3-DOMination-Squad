import '../App.css';
import AuthenticationContext from '../context/AuthenticationContext';
import Authenticator from './Authenticator/Authenticator';
import { useState } from 'react';

function App() {
  const [authenticationContext, setAuthenticationContext] = useState({
    authToken: localStorage.getItem('authToken'),
  });

  return (
    <>
      <AuthenticationContext.Provider value={[authenticationContext, setAuthenticationContext]}>
        <Authenticator />
      </AuthenticationContext.Provider>
    </>
  );
}

export default App;
