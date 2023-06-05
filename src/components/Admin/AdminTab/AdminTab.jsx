import { Container, AccessContainer, Title, LogoutButton } from './AdminTab.style';
import { useNavigate } from 'react-router-dom';

const AdminTab = ({ selected }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <AccessContainer>
        <Title>{selected}</Title>
        <LogoutButton
          isSelected={selected === 'Home'}
          onClick={() => {
            navigate('/login');
          }}
        >
          Log out
        </LogoutButton>
      </AccessContainer>
    </Container>
  );
};

export default AdminTab;
