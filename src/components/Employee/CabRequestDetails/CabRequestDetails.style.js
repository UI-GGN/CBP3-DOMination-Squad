import { primary } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  border-radius: 4px;
  font-size: 15px;
  line-height: 1;
  margin-top: 8px;

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
  margin: 4px 20px;

  @media (max-width: 800px) {
    justify-content: center;
    margin: 0px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StatusTitleText = styled.h1`
  font-size: 18px;
  line-height: 20px;
  color: rgb(156, 163, 175);
`;

export const StatusText = styled.h1`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  color: ${(props) => (props?.color ? props.color : primary)};
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
  z-index: 9999;
`;

export const Loader = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 800px) {
    width: 200px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 20px auto;
  margin-bottom: 0px;

  @media (max-width: 767px) {
    align-items: start;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 20%;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: start;
  }
`;
