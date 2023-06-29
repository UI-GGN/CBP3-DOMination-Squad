import VendorModal from '../../Admin/VendorModal';
import RequestStatusCard from '../../common/RequestStatusCard/RequestStatusCard';
import { TitleContainer, ApprovedText, DeclinedText, Button } from './RequestCard.style.js';
import { Modal } from '@mui/material';
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

const RequestCard = ({ id, requestStatus, name, employeeID, projectCode, date, time, pickup, drop }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState(requestStatus);
  const [vendorName, setVendorName] = useState('');

  const onAssignVendor = (input) => {
    setIsVisible(false);

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ status: 'APPROVED' }),
    };
    fetch(`https://cab-schedule-serverless.vercel.app/api/v1/cab-request/${id}`, options)
      .then(() => {
        setStatus('APPROVED');
        setVendorName('- ' + input);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onReject = () => {
    setIsVisible(false);

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ status: 'DECLINED' }),
    };
    fetch(`https://cab-schedule-serverless.vercel.app/api/v1/cab-request/${id}`, options)
      .then(() => {
        setStatus('DECLINED');
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

  const Footer = () => {
    return (
      <div>
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

        {status === 'PENDING' && (
          <TitleContainer>
            <Button color="#3aafa9" onClick={() => onApprove()}>
              Approve Request
            </Button>
            <Button color="#d22b2b" marginTop="4px" onClick={() => onReject()}>
              Reject Request
            </Button>
          </TitleContainer>
        )}

        {status === 'APPROVED' && (
          <TitleContainer>
            <ApprovedText>Vendor Assigned {vendorName}</ApprovedText>
          </TitleContainer>
        )}

        {status === 'DECLINED' && (
          <TitleContainer>
            <DeclinedText>Request declined</DeclinedText>
          </TitleContainer>
        )}
      </div>
    );
  };

  return (
    <RequestStatusCard
      name={name}
      projectCode={projectCode}
      employeeID={employeeID}
      date={date}
      time={time}
      location
      pickup={pickup}
      drop={drop}
      footer={Footer}
    />
  );
};

export default RequestCard;
