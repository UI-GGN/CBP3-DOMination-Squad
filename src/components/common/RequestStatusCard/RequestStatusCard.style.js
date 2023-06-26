import { primary } from '../../colors.json';
import Card from '../Card/index.js';
import styled from 'styled-components';

export const CardDetailsContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LocationSegment = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 1px;
`;

export const LocationPathIconSegment = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  align-items: center;
`;

export const LocationPathIcon = styled.div`
  display: flex;
  height: 20%;
  align-items: center;
`;

export const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: space-between;
`;

export const HeaderText = styled.h1`
  font-size: 14px;
  line-height: 20px;
  color: rgb(156, 163, 175);
`;

export const DetailsText = styled.h1`
  font-size: 16px;
  line-height: 24px;
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

export const HighlightedText = styled.h1`
  font-weight: 700;
  line-height: 24px;
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

export const HorizontalLine = styled.div`
  height: 0.5px;
  background-color: rgb(229, 231, 235);
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const VerticalLine = styled.div`
  height: 60%;
  border-style: dotted;
  border-left-width: 5px;
`;