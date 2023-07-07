import { primary, dark } from '../../colors.json';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ApprovedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShowDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VendorAssignedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const PhoneNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneNumberIcon = styled.div`
  display: flex;
  height: 20px;
  margin-right: 4px;
  align-items: center;
`;

export const PhoneNumberText = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: ${dark};
  font-family: roboto-medium;
`;

export const DetailsText = styled.h1`
  font-size: 16px;
  line-height: 24px;
`;

export const ApprovedText = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${dark};
`;

export const ShowDetailsText = styled.h1`
  font-size: 12px;
  font-weight: 700;
  color: ${primary};
  cursor: pointer;
`;

export const DeclinedText = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #b23b3b;
`;

export const Button = styled.button`
  width: 40%;
  flex-shrink: 1;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid ${(props) => (props?.color ? props.color : dark)};
  border-radius: 20px;
  padding: 4px;
  color: ${(props) => (props?.isSelected ? dark : props.color)};
  &:hover {
    font-weight: 700;
    color: white;
    background-color: ${(props) => (props?.color ? props.color : dark)};
  }
`;
