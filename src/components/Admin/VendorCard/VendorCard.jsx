import {
  CardDetailsContainer,
  Content,
  TitleContainer,
  DetailsContainer,
  TitleText,
  DetailsText,
} from './VendorCard.style.js';

const VendorCard = ({ name, phoneNumber }) => {
  return (
    <CardDetailsContainer>
      <Content data-testid="content">
        <TitleContainer>
          <TitleText data-testid="name-label">Name</TitleText>
          <TitleText data-testid="phone-number-label">Phone Number</TitleText>
        </TitleContainer>
        <DetailsContainer>
          <DetailsText data-testid="name">{name}</DetailsText>
          <DetailsText data-testid="phone-number">{phoneNumber}</DetailsText>
        </DetailsContainer>
      </Content>
    </CardDetailsContainer>
  );
};

export default VendorCard;
