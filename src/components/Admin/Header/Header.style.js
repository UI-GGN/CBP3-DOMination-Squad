import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3aafa9;
`;

export const Title = styled.text`
  margin: 2px 10px;
  font-size: 3.75rem;
  color: #17252a;
  font-weight: 700;
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
