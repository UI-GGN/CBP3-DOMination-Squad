import { primary } from '../../colors.json';
import styled from 'styled-components';

export const CustomButton = styled.button`
  padding: 6px 16px;
  border: 1px solid ${(props) => (props?.color ? props.color : primary)};
  min-width: ${(props) => (props?.width ? props.width : '100px')};
  background-color: ${(props) => (props?.bgColor ? props.bgColor : '')};
  color: ${(props) => (props?.textColor ? props.textColor : 'white')};
  font-size: ${(props) => (props?.fontSize ? props.fontSize : '14px')};
  font-weight: 630;
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    font-weight: 700;
    color: white;
    background-color: ${(props) => (props?.color ? props.color : primary)};
  }
`;
