import { primary } from '../../colors.json';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ApprovedText = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${primary};
`;

export const DeclinedText = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #b23b3b;
`;

export const Button = styled.button`
  background-color: white;
  font-weight: 600;
  font-size: 16px;
  color: #17252a;
  margin-top: 4px;
  color: ${(props) => (props?.color ? props.color : '#17252a')};
  &:hover {
    font-weight: 700;
  }
`;
