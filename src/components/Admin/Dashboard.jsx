import React from 'react';
import Logo from '../../assets/taxi.png';
import RequestStatusCard from './RequestStatusCard';
import EmployeeRequestCard from '../../Employee/RequestStatusCard';

const data = [
  {
    id: 1,
    name: 'Shivansh',
    date: '21-05-2023',
    pickup: 'Guru Dronacharya Metro Station',
    time: '10:00 AM',
  },
  {
    id: 2,
    name: 'Ayush',
    date: '21-05-2023',
    pickup: 'Sector-56 Metro Station',
    time: '10:30 AM',
  },
];

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col ">
      <div className="bg-gradient-to-r from-sky-200 to-white opacity-80">
        <div className="flex flex-row h-10 w-full justify-end">
          <div className="text-base mt-2 mr-1">onTrack</div>
          <img className="h-10 w-10 mr-2" src={Logo} />
        </div>

        <div className="ml-3 mt-5 mb-3 inline-block bg-gradient-to-r from-black via-orange-700 to-red-900 bg-clip-text text-6xl text-transparent">
          Dashboard
        </div>
      </div>
      <div className="m-5 w-full">
        <div className="text-3xl mb-3 ml-4">Today</div>
        <div className="flex flex-row overflow-visible overflow-x-scroll ">
          {data.map((request) => {
            return (
              <RequestStatusCard
                key={request.id}
                name={request.name}
                date={request.date}
                pickup={request.pickup}
                time={request.time}
              />
            );
          })}
        </div>
      </div>
      <EmployeeRequestCard name="Shivansh" date="21-05-2023" color="bg-green-500" />
    </div>
  );
};

export default Dashboard;
