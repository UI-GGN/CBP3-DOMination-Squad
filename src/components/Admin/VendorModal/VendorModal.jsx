import closeModalIcon from '../../../assets/closeModal.png';
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

const VendorModal = ({ onClose, onAssignVendor }) => {
  const vendors = [
    { id: 1, name: 'Shyam' },
    { id: 2, name: 'Subodh' },
    { id: 3, name: 'Ram' },
  ];

  const [selected, setSelected] = useState(vendors[0].name);

  return (
    <Container>
      <Header>
        <HeaderTitle>Assign Vendor</HeaderTitle>
        <CrossContainer>
          <CrossImage src={closeModalIcon} onClick={() => onClose()} />
        </CrossContainer>
      </Header>
      {vendors.map((vendor) => {
        return (
          <div key={vendor.id}>
            <Button color="#3aafa9" onClick={() => setSelected(vendor.name)} isSelected={selected === vendor.name}>
              {vendor.name}
            </Button>
            <HorizontalLine />
          </div>
        );
      })}

      <ActionContainer>
        <ActionButton color="#3aafa9" onClick={() => onAssignVendor(selected)}>
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
