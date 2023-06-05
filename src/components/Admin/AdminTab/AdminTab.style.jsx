import { primary, dark } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin: 12px;
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
