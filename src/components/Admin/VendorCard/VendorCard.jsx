import phoneIcon from '../../../assets/call.png';
import {
  CardDetailsContainer,
  Content,
  TitleContainer,
  TitleText,
  DetailsContainer,
  DetailsText,
  PhoneNumberContainer,
  PhoneNumberIcon,
  PhoneNumberText,
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
          <PhoneNumberContainer>
            {phoneNumber && (
              <PhoneNumberIcon>
                <img src={phoneIcon} style={{ maxHeight: '70%' }} />
              </PhoneNumberIcon>
            )}
            <PhoneNumberText href={`tel:${phoneNumber}`} data-testid="vendor-phone-number">
              {phoneNumber ? phoneNumber : 'Not provided'}
            </PhoneNumberText>
          </PhoneNumberContainer>
        </DetailsContainer>
      </Content>
    </CardDetailsContainer>
  );
};

export default VendorCard;
