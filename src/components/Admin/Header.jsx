import Logo from '../../assets/taxi.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col ">
      <div className="bg-gradient-to-r from-sky-200 to-white opacity-80">
        <div className="flex flex-row h-10 w-full justify-end">
          <div className="text-base mt-2 mr-1">onTrack</div>
          <img className="h-10 w-10 mr-2" src={Logo} />
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="ml-3 mt-5 mb-3 inline-block bg-gradient-to-r from-black via-orange-700 to-red-900 bg-clip-text text-6xl text-transparent">
            Dashboard
          </div>
          <button
            className="bg-slate-700 text-white font-bold rounded-3xl w-28 h-10 hover:bg-black pt-1 pb-1 mr-5"
            onClick={() => {
              navigate('/login');
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
