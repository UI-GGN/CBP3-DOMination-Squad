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

export const Title = styled.text`
  margin: 2px 10px;
  font-size: 3.75rem;
  color: #17252a;
  font-weight: 700;
`;

export const ScheduleCab = styled.section`
  display: flex;
  flex: 1;
  margin-top: 1em;
  position: relative;
  height: 50%;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    height: 5%;
    .flex-container {
      flex-direction: column;
    }
  }
`;

export const CabRequests = styled.section`
  flex: 3;
  position: relative;
  background-color: #f1fcfa;
  .heading {
    font-size: x-large;
    text-align: center;
    padding: 1em;
    //position: fixed;
    //top: 0;
  }
  //justify-content: center;
  //align-items: center;
  //display: flex;
  //flex-wrap: wrap;
  //flex-direction: row;
`;
