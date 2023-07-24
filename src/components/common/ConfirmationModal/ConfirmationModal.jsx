import closeModalIcon from '../../../assets/closeModal.png';
import { primary, red } from '../../colors.json';
import {
  Container,
  Header,
  HeaderTitle,
  CrossContainer,
  CrossImage,
  ActionContainer,
  ActionButton,
} from './ConfirmationModal.style';

const ConfirmationModal = ({ onClose, onConfirm, confirmText }) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Are you sure?</HeaderTitle>
        <CrossContainer>
          <CrossImage src={closeModalIcon} onClick={() => onClose()} />
        </CrossContainer>
      </Header>

      <ActionContainer>
        <ActionButton color={red} textColor={red} width="45%" onClick={() => onConfirm()}>
          {confirmText}
        </ActionButton>
        <ActionButton color={primary} textColor={primary} width="45%" onClick={() => onClose()}>
          Cancel
        </ActionButton>
      </ActionContainer>
    </Container>
  );
};

export default ConfirmationModal;
