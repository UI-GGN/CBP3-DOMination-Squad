import Card from '../../common/Card';
import styled from 'styled-components';

export const CardDetailsContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
`;

export const Content = styled.div`
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

export const TitleText = styled.h1`
  font-size: 14px;
  line-height: 20px;
  color: rgb(156, 163, 175);
`;

export const DetailsText = styled.h1`
  font-size: 16px;
  line-height: 24px;
`;
