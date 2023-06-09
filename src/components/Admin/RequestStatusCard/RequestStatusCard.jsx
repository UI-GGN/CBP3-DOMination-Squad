import circle from '../../../assets/circle_icon.png';
import destination from '../../../assets/destination_icon.png';
import {
  CardDetailsContainer,
  DetailsContainer,
  LocationSegment,
  LocationPathIconSegment,
  LocationPathIcon,
  LocationDetails,
  HeaderContainer,
  HeaderText,
  DetailsText,
  HighlightedText,
  Button,
  HorizontalLine,
  VerticalLine,
} from './RequestStatusCard.style';

const RequestStatusCard = ({ user, name, employeeID, date, time, pickup, drop }) => {
  if (user.type === 'admin') {
    return (
      <CardDetailsContainer>
        <HeaderContainer>
          <HeaderText>Name</HeaderText>
        </HeaderContainer>
        <DetailsContainer>
          <DetailsText>
            {name} ({employeeID})
          </DetailsText>
        </DetailsContainer>
        <HorizontalLine />

        <HeaderContainer>
          <HeaderText>Date </HeaderText>
          <HeaderText>Time</HeaderText>
        </HeaderContainer>
        <DetailsContainer>
          <DetailsText>{date}</DetailsText>
          <HighlightedText>{time}</HighlightedText>
        </DetailsContainer>
        <HorizontalLine />

        <LocationSegment>
          <LocationPathIconSegment>
            <LocationPathIcon>
              <img src={circle} style={{ maxHeight: '70%' }} />
            </LocationPathIcon>
            <VerticalLine />
            <LocationPathIcon>
              <img src={destination} style={{ maxHeight: '70%' }} />
            </LocationPathIcon>
          </LocationPathIconSegment>
          <LocationDetails>
            <HeaderText>Start Point</HeaderText>
            <DetailsText style={{ marginBottom: 10 }}>{pickup}</DetailsText>
            <HeaderText style={{ marginTop: 10 }}>End Point</HeaderText>
            <DetailsText>{drop}</DetailsText>
          </LocationDetails>
        </LocationSegment>
        <HorizontalLine />

        <HeaderContainer>
          <Button color="#3aafa9">Assign Route</Button>
          <Button color="#d22b2b" marginTop="4px">
            Reject Request
          </Button>
        </HeaderContainer>
      </CardDetailsContainer>
    );
  } else {
    return (
      <CardDetailsContainer>
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
      </CardDetailsContainer>
    );
  }
};

export default RequestStatusCard;
