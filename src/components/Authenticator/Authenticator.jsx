import AuthenticationContext from '../../context/AuthenticationContext';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { useContext } from 'react';

function Authenticator() {
  const [context] = useContext(AuthenticationContext);

  return <>{context.authToken === null ? <Login /> : <Home />}</>;
}

export default Authenticator;
