import { primary, purple } from '../../colors.json';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: clip;
`;

export const Content = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 20px;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  margin: 40px 0px 32px 32px;
  font-size: 52px;
  line-height: 24px;
  color: ${primary};
  font-family: roboto-italic;
`;

export const Header = styled.h1`
  margin: 28px 0px 12px 32px;
  font-size: 24px;
  line-height: 24px;
  color: ${purple};
  font-family: roboto-regular;
`;

export const Description = styled.h1`
  margin: 0px 0px 12px 32px;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => (props?.color ? props.color : 'white')};
  font-family: roboto-regular;
  width: 90%;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 40%;

  @media (max-width: 800px) {
    display: none;
  }
`;
