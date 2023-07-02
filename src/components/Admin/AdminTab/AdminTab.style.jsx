import { primary, dark } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${primary};
  align-items: center;
  height: 10%;
`;

export const HamburgerIcon = styled.img`
  height: 50%;
  width: 50px;
  margin-left: 8px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 38px;
  margin: 16px 24px;
  color: ${dark};
`;
