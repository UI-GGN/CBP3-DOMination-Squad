import { secondary, dark } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  line-height: 24px;
`;

export const CrossContainer = styled.div`
  height: 1em;
  align-self: end;
  margin-right: 4px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const CrossImage = styled.img`
  max-height: 80%;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => (props?.isSelected ? secondary : 'white')};
  font-weight: 600;
  font-size: 16px;
  color: #17252a;
  border: 0.5px solid ${secondary};
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${(props) => (props?.isSelected ? dark : props.color)};
  &:hover {
    font-weight: 700;
    background-color: ${secondary};
    color: ${dark};
  }
`;

export const HorizontalLine = styled.div`
  height: 0.5px;
  background-color: rgb(229, 231, 235);
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 12px;
  margin-right: 12px;
`;

export const ActionButton = styled.button`
  width: 40%;
  background-color: ${(props) => (props?.color ? props.color : 'white')};
  color: white;
  border-radius: 24px;
  font-weight: 600;
  font-size: 15px;
  padding-top: 4px;
  padding-bottom: 4px;
  &:hover {
    font-weight: 700;
  }
`;
