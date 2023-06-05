import { primary, secondary, dark } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${primary};
`;

export const AccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: end;
`;

export const Title = styled.h1`
  font-size: 38px;
  margin: 16px 24px;
  color: ${dark};
  letter-spacing: 3px;
`;

export const HorizontalLine = styled.div`
  height: 3px;
  background-color: ${dark};
  margin-top: -1px;
  opacity: 0.2;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavBarOption = styled.button`
  font-size: 16px;
  padding: 8px;
  border-bottom: ${(props) => (props.isSelected ? '5px solid' : '')};
  margin-left: 8px;
  margin-right: 16px;
  color: ${(props) => (props.isSelected ? primary : dark)};
  &:hover {
    font-weight: ${(props) => (props.isSelected ? '' : '600')};
  }
`;

export const LogoutButton = styled.button`
  background-color: ${secondary};
  font-size: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 4px 12px;
  margin: 16px;
  align-self: end;
  color: black;
  &:hover {
    background-color: #b23b3b;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.5);
    color: white;
  }
`;
