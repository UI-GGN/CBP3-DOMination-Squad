import { primary, secondary, dark } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20%;
  background-color: ${dark};
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const NavigationContainer = styled.div`
  background-color: ${dark};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AccessContainer = styled.div`
  background-color: #058282;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

export const HorizontalLine = styled.div`
  height: 0.5px;
  background-color: ${secondary};
`;

export const AccessTitle = styled.h1`
  font-size: 30px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 12px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 3px solid ${primary};
  border-radius: 20px;
`;

export const NavigationHeader = styled.div`
  display: flex;
  background-color: #1b3a4b;
`;

export const NavHeaderTitle = styled.h1`
  font-size: 20px;
  letter-spacing: 3px;
  margin: 12px;
  color: white;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavBarOption = styled.button`
  font-size: 20px;
  padding: 16px 8px;
  border-left: ${(props) => (props.isSelected ? `5px solid ${primary}` : '')};
  background-color: ${(props) => (props.isSelected ? secondary : '')};
  color: ${(props) => (props.isSelected ? dark : secondary)};
  &:hover {
    font-weight: ${(props) => (props.isSelected ? '' : '600')};
  }
`;

export const LogoutButton = styled.button`
  background-color: ${secondary};
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 6px;
  margin: 16px 0px;
  color: black;
  &:hover {
    background-color: #b23b3b;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.5);
    color: white;
  }
`;
