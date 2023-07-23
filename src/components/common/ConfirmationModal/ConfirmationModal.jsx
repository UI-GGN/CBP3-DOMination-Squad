import closeModalIcon from '../../../assets/closeModal.png';
import { primary, red } from '../../colors.json';
import StyledButton from '../StyledButton/StyledButton';
import { Container, Header, HeaderTitle, CrossContainer, CrossImage, ActionContainer } from './ConfirmationModal.style';

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
        <StyledButton color={primary} textColor={primary} width="40%" onClick={() => onConfirm()}>
          {confirmText}
        </StyledButton>
        <StyledButton color={red} textColor={red} width="40%" onClick={() => onClose()}>
          Cancel
        </StyledButton>
      </ActionContainer>
    </Container>
  );
};

export default ConfirmationModal;
