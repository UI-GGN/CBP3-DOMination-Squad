import circle from '../../../assets/circle_icon.png';
import destination from '../../../assets/destination_icon.png';
import {
  CardDetailsContainer,
  Header,
  DateSection,
  Location,
  TitleContainer,
  DetailsContainer,
  LocationSegment,
  LocationPathIconSegment,
  LocationPathIcon,
  LocationPathImage,
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
        <Header data-testid="employee-details-section">
          <TitleContainer>
            <TitleText data-testid="name-label">Name</TitleText>
            <TitleText data-testid="project-code-label">Project Code</TitleText>
          </TitleContainer>
          <DetailsContainer>
            <DetailsText data-testid="name">
              {name} ({employeeID})
            </DetailsText>
            <DetailsText data-testid="project-code">{projectCode}</DetailsText>
          </DetailsContainer>
          <HorizontalLine />
        </Header>
      )}

      <DateSection>
        <TitleContainer>
          <TitleText data-testid="date-label">Date</TitleText>
          <TitleText data-testid="pickup-time-label">Pickup Time</TitleText>
        </TitleContainer>
        <DetailsContainer>
          <DetailsText data-testid="date">{date}</DetailsText>
          <HighlightedText data-testid="pickup-time">{time}</HighlightedText>
        </DetailsContainer>
        <HorizontalLine />
      </DateSection>

      {location && (
        <Location data-testid="location-section">
          <LocationSegment>
            <LocationPathIconSegment>
              <LocationPathIcon>
                <LocationPathImage src={circle} />
              </LocationPathIcon>
              <VerticalLine />
              <LocationPathIcon>
                <LocationPathImage src={destination} />
              </LocationPathIcon>
            </LocationPathIconSegment>
            <LocationDetails>
              <TitleText data-testid="start-point-label">Start Point</TitleText>
              <DetailsText style={{ marginBottom: 10 }} data-testid="pickup-location">
                {pickup}
              </DetailsText>
              <TitleText style={{ marginTop: 10 }} data-testid="end-point-label">
                End Point
              </TitleText>
              <DetailsText data-testid="drop-location">{drop}</DetailsText>
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
