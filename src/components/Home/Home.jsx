import ScheduleCabDialogBox from '../Employee/ScheduleCab/ScheduleCabDialogBox.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-row items-center justify-center">
      <button
        className="bg-blue-500 text-white font-bold rounded-3xl w-28 h-10 hover:bg-black pt-1 pb-1 mr-5"
        onClick={() => {
          navigate('/admin/dashboard');
        }}
      >
        Admin
      </button>

      <button
        className="bg-green-500 text-white font-bold rounded-3xl w-28 h-10 hover:bg-black pt-1 pb-1 mr-5"
        onClick={() => {
          navigate('/employee/dashboard');
        }}
      >
        Employee
      </button>
    </div>
  );
};

export default Home;
