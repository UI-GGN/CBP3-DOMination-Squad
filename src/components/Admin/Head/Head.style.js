import { primary, secondary } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${primary};
  padding-bottom: 12px;
  width: 20%;
`;

export const Title = styled.h1`
  margin-top: 100px;
  font-size: 48px;
  align-self: center;
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
