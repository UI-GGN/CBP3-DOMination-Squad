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

export const ScheduleCab = styled.section`
  display: flex;
  flex: 1;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (min-width: 100vh) {
    height: 98.5vh;
  }

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

  //@media (max-height: 100vh) {
  //  height: 100vh;
  //}
  //justify-content: center;
  //align-items: center;
  //display: flex;
  //flex-wrap: wrap;
  //flex-direction: row;
`;
