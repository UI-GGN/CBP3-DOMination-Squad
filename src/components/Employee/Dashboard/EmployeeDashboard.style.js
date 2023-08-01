import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  border-radius: 4px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    .flex-container {
      flex-direction: column;
    }
  }
`;

export const CabRequests = styled.section`
  display: flex;
  flex-flow: wrap;
  justify-content: start;
  margin: 0 24px;
`;
