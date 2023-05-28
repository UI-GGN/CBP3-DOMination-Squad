import RequestStatusCard from '../RequestStatusCard/RequestStatusCard.jsx';
import { Container, CardContainer } from './Request.style.js';

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
    <Container>
      <CardContainer>
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
      </CardContainer>
    </Container>
  );
};

export default Requests;
