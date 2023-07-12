import { primary, dark } from '../colors.json';
import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

export const SignInSection = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
`;

export const SignUpSection = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

export const SignInSegment = styled.div`
  min-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  padding: 20px;
`;

export const SignInTitle = styled.h1`
  font-size: 32px;
  line-height: 24px;
  color: ${dark};
  font-family: roboto-regular;
  align-self: start;
  margin-bottom: 24px;
`;

export const AlertText = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: #b23b3b;
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
    color: ${primary};
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
