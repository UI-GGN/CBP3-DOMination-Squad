import { dark, purple, pink } from '../../colors.json';
import StyledButton from '../../common/StyledButton/StyledButton';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const VendorList = styled.div`
  height: 50vh;
  overflow-y: auto;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  line-height: 24px;
  color: ${dark};
  font-family: roboto-regular;
  margin-top: 8px;
  margin-bottom: 12px;
`;

export const CrossContainer = styled.div`
  height: 1em;
  margin-right: 4px;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const CrossImage = styled.img`
  max-height: 80%;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => (props?.isSelected ? purple : 'white')};
  font-weight: 600;
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 4px;
  color: ${(props) => (props?.isSelected ? 'white' : props.color)};
  &:hover {
    font-weight: 700;
    background-color: ${(props) => (props?.isSelected ? purple : pink)};
    color: white;
  }
`;

export const HorizontalLine = styled.div`
  height: 0.7px;
  background-color: rgb(229, 231, 235);
`;

export const ActionButton = styled(StyledButton)`
  margin-bottom: 8px;
  @media (max-width: 600px) {
    width: 75%;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 12px;
  margin-right: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
