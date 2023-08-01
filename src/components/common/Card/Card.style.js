import styled from 'styled-components';

export const Content = styled.div`
  padding: 14px 20px;
`;

export const Container = styled.div`
  border-radius: 20px;
  padding: 16px 20px;
  background-color: ${(props) => (props.color ? props.color : 'white')};
  flex-shrink: 0;
  width: ${(props) => (props.width ? props.width : '380px')};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 20px;
  &:hover {
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    min-width: 300px;
    max-width: 325px;
  }

  @media (max-width: 500px) {
    width: 250px;
    padding: 12px 16px;
  }
`;
