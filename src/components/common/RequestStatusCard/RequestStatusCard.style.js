import Card from '../Card/index.js';
import styled from 'styled-components';

export const CardDetailsContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-grow: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
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

export const LocationPathImage = styled.img`
  max-height: 70%;
  max-width: 100%;
  align-self: center;

  @media (max-width: 800px) {
    max-width: 80%;
  }
`;

export const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: space-between;
`;

export const HighlightedText = styled.h1`
  font-weight: 700;
  line-height: 24px;
`;

export const TitleText = styled.h1`
  font-size: 14px;
  line-height: 20px;
  color: rgb(156, 163, 175);
`;

export const DetailsText = styled.h1`
  font-size: 16px;
  line-height: 24px;
`;

export const HorizontalLine = styled.div`
  height: 0.5px;
  background-color: rgb(229, 231, 235);
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const VerticalLine = styled.div`
  height: 60%;
  border-style: dotted;
  border-left-width: 5px;
`;
