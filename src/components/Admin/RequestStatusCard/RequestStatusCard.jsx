import {
  CardDetailsContainer,
  DetailsContainer,
  HeaderContainer,
  HeaderText,
  HighlightedText,
  Button,
  HorizontalLine,
} from './RequestStatusCard.style';

const RequestStatusCard = ({ user, name, employeeID, date, time, pickup, drop }) => {
  if (user.type === 'admin') {
    return (
      <CardDetailsContainer>
        <HeaderContainer>
          <HeaderText>Name</HeaderText>
        </HeaderContainer>
        <DetailsContainer>
          <div className="text-base ">
            {name} ({employeeID})
          </div>
        </DetailsContainer>
        <HorizontalLine />

        <HeaderContainer>
          <HeaderText>Date </HeaderText>
          <HeaderText>Time</HeaderText>
        </HeaderContainer>
        <DetailsContainer>
          <div className="text-base w-2/3">{date}</div>
          <HighlightedText>{time}</HighlightedText>
        </DetailsContainer>
        <HorizontalLine />

        <HeaderContainer>
          <HeaderText>Start Point</HeaderText>
          <HeaderText>End Point</HeaderText>
        </HeaderContainer>
        <DetailsContainer>
          <HighlightedText className="w-2/4">{pickup}</HighlightedText>
          <div className="text-base text-right w-1/4">{drop}</div>
        </DetailsContainer>

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
