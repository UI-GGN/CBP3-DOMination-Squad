import AuthenticationContext from '../../context/AuthenticationContext';
import { useContext } from 'react';

function Login() {
  const [, setAuthenticationContext] = useContext(AuthenticationContext);
  return (
    <>
      <div>Log In</div>
      <button
        onClick={() => {
          localStorage.setItem('authToken', '123');
          setAuthenticationContext({
            authToken: '123',
          });
        }}
      >
        Log in
      </button>
    </>
  );
}

export default Login;
