import styled from 'styled-components';

export const Content = styled.div`
  padding: 16px 20px;
`;

export const Container = styled.div`
  padding: 16px 20px;
  background-color: ${(props) => (props.color ? props.color : 'white')};
  flex-shrink: 0;
  width: ${(props) => (props.width ? props.width : '325px')};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 20px;
  &:hover {
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
