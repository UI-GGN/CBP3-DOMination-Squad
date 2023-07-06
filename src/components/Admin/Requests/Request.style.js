import { primary, secondary, dark } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  position: absolute;
  align-self: end;
  bottom: 20px;
  border-radius: 20px;
  background-color: ${secondary};
  font-weight: 600;
  font-size: 16px;
  color: ${dark};
  padding: 15px;
  &:hover {
    background-color: ${primary};
    color: white;
  }
`;
