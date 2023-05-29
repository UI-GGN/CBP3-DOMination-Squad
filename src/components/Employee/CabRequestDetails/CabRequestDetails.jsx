import RequestStatusCard from '../../Admin/RequestStatusCard/index.js';
import Card from '../../common/Card';
import { HeaderContainer, HeaderText, Button } from './CabRequestDetails.style';

const data = [
  {
    id: 1,
    name: 'Shivansh',
    date: '29-05-2023',
    pickup: 'Guru Dronacharya Metro Station',
    time: '10:00 AM',
  },
  {
    id: 2,
    name: 'Ayush',
    date: '29-05-2023',
    pickup: 'Sector-56 Metro Station',
    time: '10:30 AM',
  },
];

const CabRequestDetails = ({ name, date, pickup, time }) => {
  return (
    <Card>
      <div>
        <HeaderContainer>
          <HeaderText>Name</HeaderText>
          <HeaderText>Date</HeaderText>
        </HeaderContainer>
        <div className="flex flex-row justify-between mb-5">
          <div className="text-base font-bold">{name}</div>
          <div className="text-base ">{date}</div>
        </div>
        <HeaderContainer>
          <HeaderText>Pickup </HeaderText>
          <HeaderText>Time</HeaderText>
        </HeaderContainer>
        <HeaderContainer>
          <div className="text-base w-2/3">{pickup}</div>
          <div className="text-base ">{time}</div>
        </HeaderContainer>

        <HeaderContainer>
          <Button color="#d22b2b" marginTop="4px">
            Cancel Request
          </Button>
        </HeaderContainer>
      </div>
    </Card>
  );
};


export default CabRequestDetails;