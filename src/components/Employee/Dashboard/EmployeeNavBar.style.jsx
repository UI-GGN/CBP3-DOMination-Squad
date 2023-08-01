import { primary } from '../../colors.json';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 15%;
  background-color: ${primary};
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4em;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: flex;
  }
`;
