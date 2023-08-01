import { primary, dark, pink } from '../colors.json';
import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    max-height: 100vh;
  }
`;

export const SignInSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const SignInSegment = styled.div`
  width: 25%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  padding: 0px 20px;

  @media (max-width: 800px) {
    width: 75%;
  }

  @media (max-width: 1200px) and (min-width: 800px) {
    width: 60%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SignInTitle = styled.h1`
  font-size: 28px;
  line-height: 24px;
  color: ${dark};
  font-family: roboto-regular;
  align-self: center;
  margin-bottom: 24px;
`;

export const AlertText = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: #b23b3b;
`;

export const Logo = styled.div`
  display: flex;
  width: 90%;
  margin: 24px;
  margin-bottom: 40px;
  display: flex;
`;

export const LogoImage = styled.img`
  width: 50%;
  margin-bottom: 0.8em;
  margin-left: 8px;
  align-self: end;

  @media (max-width: 500px) {
    margin-bottom: 0.5em;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    margin-bottom: 0.6em;
    width: 40%;
  }

  @media (min-width: 800px) and (max-width: 1200px) {
    margin-bottom: 0.6em;
    width: 40%;
  }
`;

export const LogoText = styled.h1`
  font-size: 2.8em;
  color: ${primary};

  @media (max-width: 500px) {
    font-size: 2em;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    font-size: 2.5em;
  }
`;

export const StyledTextField = styled(TextField)`
  background: white;
  border-radius: 24px;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  & label.Mui-focused {
    color: ${pink};
    font-family: roboto-regular;
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${primary};
  }
  & .MuiOutlinedInput-root {
    & -internal-autofill-selected {
      background-color: red !important;
    }
    & fieldset {
      border-color: ${dark};
      border-radius: 24px;
    }
    &:hover fieldset {
      border: 2px solid ${primary};
    }
    &.Mui-focused fieldset {
      border-color: ${dark};
    }
  }
`;

export const Button = styled.button`
  width: 40%;
  align-self: center;
  flex-shrink: 1;
  font-weight: 700;
  font-size: 16px;
  border: 1px solid ${(props) => (props?.color ? props.color : dark)};
  border-radius: 20px;
  padding: 8px;
  margin: 16px;
  color: ${(props) => (props?.isSelected ? dark : props.color)};
  &:hover {
    font-weight: 700;
    color: ${(props) => (props?.bgColor ? props.bgColor : 'white')};
    background-color: ${(props) => (props?.color ? props.color : dark)};
  }
`;
