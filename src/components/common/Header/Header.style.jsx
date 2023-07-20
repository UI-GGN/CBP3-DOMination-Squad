import { dark_blue, pink } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${dark_blue};
`;

export const Content = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    width: 30%;
  }
`;

export const LogoImage = styled.img`
  @media (max-width: 800px) {
    max-width: 80%;
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
`;

export const NavBarOption = styled.button`
  font-size: 18px;
  font-weight: 630;
  padding: 12px 8px;
  border-bottom: ${(props) => (props.isSelected ? `3px solid ${pink}` : '')};
  margin-right: 20px;
  color: ${(props) => (props.isSelected ? pink : 'white')};
  &:hover {
    font-weight: ${(props) => (props.isSelected ? '' : '600')};
    // border-bottom: 3px solid ${pink};
    color: ${pink};
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  margin: 16px 24px;
  color: ${dark_blue};
`;

export const HorizontalLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${dark_blue};
`;

export const LogoutButton = styled.button`
  flex-shrink: 1;
  font-weight: 630;
  font-size: 14px;
  background-color: ${pink};
  border-radius: 24px;
  padding: 12px 20px;
  color: white;
  &:hover {
    background-color: #9b293c;
  }

  @media (max-width: 800px) {
    width: 25%;
  }
`;
