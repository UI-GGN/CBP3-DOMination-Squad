import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  flex: 1;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  position: absolute;
  align-self: end;
  bottom: 30px;
  background-color: lightgray;
  font-weight: 600;
  font-size: 16px;
  color: #17252a;
  padding: 12px;
  &:hover {
    font-weight: 700;
  }
`;
