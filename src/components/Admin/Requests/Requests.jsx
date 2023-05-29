import RequestStatusCard from '../RequestStatusCard/RequestStatusCard.jsx';
import { Container, CardContainer } from './Request.style.js';
import axios from 'axios';
import { useEffect } from 'react';

const data = [
  {
    id: 1,
    name: 'Shivansh',
    employeeID: '1',
    date: '21-05-2023',
    time: '10:00 AM',
    pickup: 'Guru Dronacharya Metro Station',
    drop: 'Dwarka Metro Station ',
  },
  {
    id: 2,
    name: 'Ayush',
    employeeID: '2',
    date: '21-05-2023',
    time: '10:30 AM',
    pickup: 'Sector-56 Metro Station',
    drop: 'Some other Metro station',
  },
];

const Requests = (type) => {
  const getRequests = () => {
    axios
      .get('https://cab-schedule-serverless.vercel.app/api/v1/cab-request')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <Container>
      <CardContainer>
        {data.map((request) => {
          return (
            <RequestStatusCard
              user={type}
              key={request.id}
              name={request.name}
              employeeID={request.employeeID}
              date={request.date}
              time={request.time}
              pickup={request.pickup}
              drop={request.drop}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Requests;
