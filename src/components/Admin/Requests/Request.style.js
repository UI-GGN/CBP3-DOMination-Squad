import { dark, green } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  margin: 20px auto 0px auto;

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

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  margin: 0px 24px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: ${(props) => (props.width ? props.width : '200px')};
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0%);
  border-radius: 20px;
  padding: 16px 20px;
  background-color: ${(props) => (props.alertType ? green : '#b23b3b')};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 20px;
  margin-right: 12px;

  @media (max-width: 800px) {
    margin-bottom: 4px;
  }
`;

export const AlertText = styled.h1`
  bottom: 20px;
  font-size: 20px;
  line-height: 24px;
  color: white;
`;

export const Button = styled.button`
  flex-shrink: 1;
  font-weight: 630;
  font-size: 14px;
  border: 2px solid ${(props) => (props?.color ? props.color : dark)};
  border-radius: 24px;
  padding: 12px;
  color: ${(props) => (props?.isSelected ? dark : props.color)};
  &:hover {
    font-weight: 700;
    color: white;
    background-color: ${(props) => (props?.color ? props.color : dark)};
  }
`;
