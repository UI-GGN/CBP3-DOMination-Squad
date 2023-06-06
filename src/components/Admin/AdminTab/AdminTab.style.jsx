import { primary, dark } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${primary};
  justify-content: center;
  height: 10vh;
`;

export const Title = styled.h1`
  font-size: 38px;
  margin: 16px 24px;
  color: ${dark};
  letter-spacing: 3px;
`;
