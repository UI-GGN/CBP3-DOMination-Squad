import circle from '../../../assets/circle_icon.png';
import destination from '../../../assets/destination_icon.png';
import VendorModal from '../../Admin/VendorModal';
import {
  CardDetailsContainer,
  DetailsContainer,
  LocationSegment,
  LocationPathIconSegment,
  LocationPathIcon,
  LocationDetails,
  HeaderContainer,
  HeaderText,
  DetailsText,
  HighlightedText,
  ApprovedText,
  DeclinedText,
  Button,
  HorizontalLine,
  VerticalLine,
} from './RequestStatusCard.style.js';
import { Modal } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  backgroundColor: 'white',
  boxShadow: 24,
  outline: 0,
};

const RequestStatusCard = ({ id, requestStatus, name, employeeID, date, time, pickup, drop }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState(requestStatus);

  const onAssignVendor = () => {
    setIsVisible(false);
    axios.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
    axios
      .put(`https://cab-schedule-serverless.vercel.app/api/v1/cab-request/${id}`, { status: 'APPROVED' })
      .then(() => {
        setStatus('APPROVED');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onModalClose = () => {
    setIsVisible(false);
  };

  const onApprove = () => {
    setIsVisible(true);
  };

  return (
    <CardDetailsContainer>
      <Modal
        open={isVisible}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <VendorModal onClose={onModalClose} onAssignVendor={onAssignVendor} />
        </div>
      </Modal>
      <HeaderContainer>
        <HeaderText>Name</HeaderText>
      </HeaderContainer>
      <DetailsContainer>
        <DetailsText>
          {name} ({employeeID})
        </DetailsText>
      </DetailsContainer>
      <HorizontalLine />

      <HeaderContainer>
        <HeaderText>Date </HeaderText>
        <HeaderText>Time</HeaderText>
      </HeaderContainer>
      <DetailsContainer>
        <DetailsText>{date}</DetailsText>
        <HighlightedText>{time}</HighlightedText>
      </DetailsContainer>
      <HorizontalLine />

      <LocationSegment>
        <LocationPathIconSegment>
          <LocationPathIcon>
            <img src={circle} style={{ maxHeight: '70%' }} />
          </LocationPathIcon>
          <VerticalLine />
          <LocationPathIcon>
            <img src={destination} style={{ maxHeight: '70%' }} />
          </LocationPathIcon>
        </LocationPathIconSegment>
        <LocationDetails>
          <HeaderText>Start Point</HeaderText>
          <DetailsText style={{ marginBottom: 10 }}>{pickup}</DetailsText>
          <HeaderText style={{ marginTop: 10 }}>End Point</HeaderText>
          <DetailsText>{drop}</DetailsText>
        </LocationDetails>
      </LocationSegment>
      <HorizontalLine />

      {status === 'PENDING' && (
        <HeaderContainer>
          <Button color="#3aafa9" onClick={() => onApprove()}>
            Approve
          </Button>
          <Button color="#d22b2b" marginTop="4px">
            Reject Request
          </Button>
        </HeaderContainer>
      )}

      {status === 'APPROVED' && (
        <HeaderContainer>
          <ApprovedText>Vendor Assigned</ApprovedText>
        </HeaderContainer>
      )}

      {status === 'DECLINED' && (
        <HeaderContainer>
          <DeclinedText>Request declined</DeclinedText>
        </HeaderContainer>
      )}
    </CardDetailsContainer>
  );
};

export default RequestStatusCard;
