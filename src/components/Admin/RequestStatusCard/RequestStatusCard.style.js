import styled from 'styled-components';

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

export const HeaderText = styled.text`
  font-size: 14px;
  line-height: 20px;
  color: rgb(107 114 128);
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: white;
  font-weight: 600;
  font-size: 16px;
  color: #17252a;
  color: ${(props) => (props?.color ? props.color : '#17252a')};
  &:hover {
    font-weight: 700;
  }
`;
