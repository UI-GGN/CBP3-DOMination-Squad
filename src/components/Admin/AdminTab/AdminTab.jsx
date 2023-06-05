import { Container, Title, NavBar, NavBarOption, HorizontalLine } from './AdminTab.style';

const AdminTab = ({ selected, onPress }) => {
  return (
    <Container>
      <Title>{selected}</Title>
      <NavBar>
        <NavBarOption
          isSelected={selected === 'Requests'}
          onClick={() => {
            onPress('Requests');
          }}
        >
          Requests
        </NavBarOption>
        <NavBarOption
          isSelected={selected === 'Routes'}
          onClick={() => {
            onPress('Routes');
          }}
        >
          Routes
        </NavBarOption>
        <NavBarOption
          isSelected={selected === 'Profile'}
          onClick={() => {
            onPress('Profile');
          }}
        >
          Profile
        </NavBarOption>
      </NavBar>
      <HorizontalLine />
    </Container>
  );
};

export default AdminTab;
