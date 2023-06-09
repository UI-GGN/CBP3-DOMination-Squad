import hamburger from '../../../assets/menu.png';
import { Container, HamburgerIcon, Title } from './AdminTab.style';

const AdminTab = ({ selected, onIconPress, isHeaderVisible }) => {
  return (
    <Container>
      {!isHeaderVisible && <HamburgerIcon src={hamburger} onClick={() => onIconPress()} />}
      <Title>{selected}</Title>
    </Container>
  );
};

export default AdminTab;
