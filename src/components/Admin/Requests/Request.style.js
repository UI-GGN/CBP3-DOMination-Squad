import { dark } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Filters = styled.div`
  width: 10%;
  margin-left: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
