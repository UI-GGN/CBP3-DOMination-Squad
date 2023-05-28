import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
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
  margin: 1em;
  background-color: #17252a;
  padding: 0.5em 1.5em;
  border-radius: 1.5rem;
  color: white;
  &:hover {
    background-color: #d22b2b;
  }
`;
