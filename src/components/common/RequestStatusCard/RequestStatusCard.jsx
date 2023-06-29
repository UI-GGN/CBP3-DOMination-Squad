import circle from '../../../assets/circle_icon.png';
import destination from '../../../assets/destination_icon.png';
import {
  CardDetailsContainer,
  Header,
  Location,
  TitleContainer,
  DetailsContainer,
  LocationSegment,
  LocationPathIconSegment,
  LocationPathIcon,
  LocationDetails,
  HighlightedText,
  TitleText,
  DetailsText,
  HorizontalLine,
  VerticalLine,
} from './RequestStatusCard.style.js';

const RequestStatusCard = ({ name, employeeID, projectCode, date, time, location, pickup, drop, footer: Footer }) => {
  return (
    <CardDetailsContainer>
      {name && (
        <Header>
          <TitleContainer>
            <TitleText>Name</TitleText>
            <TitleText>Project Code</TitleText>
          </TitleContainer>
          <DetailsContainer>
            <DetailsText>
              {name} ({employeeID})
            </DetailsText>
            <DetailsText>{projectCode}</DetailsText>
          </DetailsContainer>
          <HorizontalLine />
        </Header>
      )}

      <TitleContainer>
        <TitleText>Date </TitleText>
        <TitleText>Pickup Time</TitleText>
      </TitleContainer>
      <DetailsContainer>
        <DetailsText>{date}</DetailsText>
        <HighlightedText>{time}</HighlightedText>
      </DetailsContainer>
      <HorizontalLine />
      {Header && <Header />}

      {location && (
        <Location>
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
              <TitleText>Start Point</TitleText>
              <DetailsText style={{ marginBottom: 10 }}>{pickup}</DetailsText>
              <TitleText style={{ marginTop: 10 }}>End Point</TitleText>
              <DetailsText>{drop}</DetailsText>
            </LocationDetails>
          </LocationSegment>
          {Footer && <HorizontalLine />}
        </Location>
      )}

      {Footer && <Footer />}
    </CardDetailsContainer>
  );
};

export default RequestStatusCard;
