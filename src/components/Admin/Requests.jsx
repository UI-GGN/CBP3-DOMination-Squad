import RequestStatusCard from './RequestStatusCard.jsx';

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

const Requests = () => {
  return (
    <div className="h-screen flex flex-col ">
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
    </div>
  );
};

export default Requests;
