import closeModalIcon from '../../../assets/closeModal.png';
import { green, purple, red } from '../../colors.json';
import StyledButton from '../../common/StyledButton/StyledButton';
import {
  Container,
  Header,
  HeaderTitle,
  CrossContainer,
  CrossImage,
  Button,
  HorizontalLine,
  ActionContainer,
} from './VendorModal.style';
import { useState } from 'react';

const VendorModal = ({ onClose, onAssignVendor, vendorList }) => {
  const [selected, setSelected] = useState(vendorList[0].id);

  return (
    <Container>
      <Header>
        <HeaderTitle>Assign Vendor</HeaderTitle>
        <CrossContainer>
          <CrossImage src={closeModalIcon} onClick={() => onClose()} />
        </CrossContainer>
      </Header>
      {vendorList.map((vendor) => {
        return (
          <div key={vendor.id}>
            <Button color={purple} onClick={() => setSelected(vendor.id)} isSelected={selected === vendor.id}>
              {vendor.name}
            </Button>
            <HorizontalLine />
          </div>
        );
      })}

      <ActionContainer>
        <StyledButton color={green} textColor={green} width="40%" onClick={() => onAssignVendor(selected)}>
          Assign Vendor
        </StyledButton>
        <StyledButton color={red} textColor={red} width="40%" onClick={() => onClose()}>
          Cancel
        </StyledButton>
      </ActionContainer>
    </Container>
  );
};

export default VendorModal;
