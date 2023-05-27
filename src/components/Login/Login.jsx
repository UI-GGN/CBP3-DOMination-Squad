import CONSTANTS from '../../constants/constants.json';
import AuthenticationContext from '../../context/AuthenticationContext';
import CustomInput from '../common/CustomInput';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const { LOGIN, LOGIN_HEADER } = CONSTANTS;

const Login = () => {
  const navigate = useNavigate();
  const [, setAuthenticationContext] = useContext(AuthenticationContext);

  return (
    <>
      <div className="flex bg-white flex-row h-screen w-screen">
        <div className="basis-7/12 h-screen flex flex-col items-center justify-center">
          <div className="text-6xl mb-40 mx-12">{LOGIN_HEADER}</div>
          <div className="relative w-4/12 mb-16">
            <CustomInput label="Email Id" />
          </div>
          <div className="relative w-4/12 mb-16">
            <CustomInput label="Password" />
          </div>
          <div>
            <button
              className="mb-4 bg-primary text-white	font-bold rounded-3xl w-48 padding-lg hover:bg-secondary pt-3 pb-3"
              onClick={() => {
                localStorage.setItem('authToken', '123');
                setAuthenticationContext({
                  authToken: '123',
                });
                navigate('/');
              }}
            >
              {LOGIN}
            </button>
          </div>

          <div>
            <p className="text-gray-400 font-weight-bold">Forgot your password?</p>
          </div>
        </div>
        <div className="basis-5/12 h-screen flex items-center justify-center">
          <div className="w-full h-full bg-landing_image bg-cover bg-no-repeat">
            <div className="w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <div className="text-white font-bold text-6xl mb-8">New Here?</div>
              <p className="text-white text-xl m-8">
                Effortless Commutes: Sign Up Now for Hassle-Free Office Cab Booking!
              </p>
              <button className="mb-4 bg-white font-bold rounded-3xl w-48 padding-lg hover:bg-secondary hover:text-white pt-3 pb-3">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
