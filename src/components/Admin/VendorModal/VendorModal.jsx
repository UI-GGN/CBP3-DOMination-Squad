import closeModalIcon from '../../../assets/closeModal.png';
import {
  Container,
  CrossContainer,
  CrossImage,
  Button,
  HorizontalLine,
  ActionContainer,
  ActionButton,
} from './VendorModal.style';
import { useState } from 'react';

const VendorModal = ({ onClose, onApprove, request }) => {
  const vendors = [
    { id: 1, name: 'Vendor 1' },
    { id: 2, name: 'Vendor 2' },
    { id: 3, name: 'Vendor 3' },
  ];

  const [selected, setSelected] = useState(vendors[0].id);

  return (
    <Container>
      <CrossContainer>
        <CrossImage src={closeModalIcon} onClick={() => onClose()} />
      </CrossContainer>
      {vendors.map((vendor) => {
        return (
          <div key={vendor.id}>
            <Button color="#3aafa9" onClick={() => setSelected(vendor.id)} isSelected={selected === vendor.id}>
              {vendor.name}
            </Button>
            <HorizontalLine />
          </div>
        );
      })}

      <ActionContainer>
        <ActionButton color="#3aafa9" onClick={() => onApprove(request)}>
          Approve
        </ActionButton>
        <ActionButton color="#d22b2b" onClick={() => onClose()}>
          Cancel
        </ActionButton>
      </ActionContainer>
    </Container>
  );
};

export default VendorModal;
