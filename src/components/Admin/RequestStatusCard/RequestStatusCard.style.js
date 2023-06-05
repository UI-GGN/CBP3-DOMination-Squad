import Card from '../../common/Card';
import styled from 'styled-components';

export const CardDetailsContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardActionsContainer = styled.div``;

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
  margin-bottom: 20px;
`;

export const HeaderText = styled.h1`
  font-size: 14px;
  line-height: 20px;
  color: rgb(107 114 128);
`;

export const Button = styled.button`
  background-color: white;
  font-weight: 600;
  font-size: 16px;
  color: #17252a;
  color: ${(props) => (props?.color ? props.color : '#17252a')};
  &:hover {
    font-weight: 700;
  }
`;
