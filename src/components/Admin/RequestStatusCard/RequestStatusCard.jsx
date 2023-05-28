import Card from '../../common/Card';
import { HeaderContainer, HeaderText, Button } from './RequestStatusCard.style';

const RequestStatusCard = ({ name, date, pickup, time }) => {
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
          <Button color="#3aafa9">Assign Route</Button>
          <Button color="#d22b2b" marginTop="4px">
            Reject Request
          </Button>
        </HeaderContainer>
      </div>
    </Card>
  );
};

export default RequestStatusCard;
