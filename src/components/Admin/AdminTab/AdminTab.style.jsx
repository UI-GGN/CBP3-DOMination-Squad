import { primary, dark } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${primary};
  align-items: center;
  height: 8vh;
`;

export const HamburgerIcon = styled.img`
  height: 60%;
  width: 45px;
  margin-left: 8px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 38px;
  margin: 16px 24px;
  color: ${dark};
`;
