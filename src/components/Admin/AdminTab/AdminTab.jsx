import { Container, Title } from './AdminTab.style';

const AdminTab = ({ selected }) => {
  return (
    <Container>
      <Title>{selected}</Title>
    </Container>
  );
};

export default AdminTab;
