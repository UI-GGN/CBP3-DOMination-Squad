import Card from '../../common/Card';
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

export const HeaderText = styled.h1`
  font-size: 14px;
  line-height: 20px;
  color: rgb(156, 163, 175);
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
  margin-top: 12px;
  margin-bottom: 12px;
`;
