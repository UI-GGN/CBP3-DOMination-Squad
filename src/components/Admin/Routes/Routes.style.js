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

export const Card = styled.div`
  padding: 16px 20px;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 20px;
  &:hover {
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardSegment = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 1px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  margin: 1em;
  padding: 0.5em 1.5em;
  border-radius: 1.5rem;
  color: white;
  &:hover {
    background-color: #d22b2b;
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
