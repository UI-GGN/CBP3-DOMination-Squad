import closeModalIcon from '../../../assets/closeModal.png';
import { green, purple } from '../../colors.json';
import {
  Container,
  Header,
  HeaderTitle,
  CrossContainer,
  CrossImage,
  Button,
  HorizontalLine,
  ActionContainer,
  ActionButton,
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
        <ActionButton color={green} onClick={() => onAssignVendor(selected)}>
          Assign Vendor
        </ActionButton>
        <ActionButton color="#d22b2b" onClick={() => onClose()}>
          Cancel
        </ActionButton>
      </ActionContainer>
    </Container>
  );
};

export default VendorModal;
