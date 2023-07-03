import hamburger from '../../../assets/menu.png';
import { Container, HamburgerIcon, Title } from './AdminTab.style';

const AdminTab = ({ selected, onIconPress, isHeaderVisible }) => {
  return (
    <Container data-testid="container">
      {!isHeaderVisible && <HamburgerIcon data-testid="hamburger-icon" src={hamburger} onClick={() => onIconPress()} />}
      <Title data-testid="admin-tab-title">{selected}</Title>
    </Container>
  );
};

export default AdminTab;
