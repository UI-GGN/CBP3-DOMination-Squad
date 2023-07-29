import { dark } from '../../colors.json';
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

export const PhoneNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneNumberIcon = styled.div`
  display: flex;
  height: 20px;
  margin-right: 4px;
  align-items: center;
`;

export const PhoneNumberText = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: ${dark};
  font-family: roboto-medium;
`;
