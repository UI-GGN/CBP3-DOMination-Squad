import phoneIcon from '../../../assets/call.png';
import VendorModal from '../../Admin/VendorModal';
import { green } from '../../colors.json';
import RequestStatusCard from '../../common/RequestStatusCard/RequestStatusCard';
import {
  TitleContainer,
  ApprovedContainer,
  VendorAssignedContainer,
  ShowDetailsContainer,
  DetailsContainer,
  PhoneNumberContainer,
  PhoneNumberIcon,
  DetailsText,
  ApprovedText,
  DeclinedText,
  ShowDetailsText,
  PhoneNumberText,
  Button,
} from './RequestCard.style.js';
import { Modal } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  backgroundColor: 'white',
  borderRadius: 20,
  boxShadow: 24,
  outline: 0,
};

const RequestCard = ({
  id,
  requestStatus,
  name,
  employeeID,
  projectCode,
  date,
  time,
  pickup,
  drop,
  vendorList,
  vendorId,
  onVendorAssign,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState(requestStatus);
  const [showDetails, setShowDetails] = useState(false);
  const [vendorID, setVendorID] = useState(vendorId);
  const showDetailsText = showDetails ? 'Hide Details' : 'Show details';
  const onAssignVendor = (input) => {
    setIsVisible(false);

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ status: 'APPROVED', vendorId: input }),
    };
    fetch(`https://shuttle-service-tw.vercel.app/api/v1/cab-request/${id}`, options)
      .then(() => {
        setStatus('APPROVED');
        setVendorID(input);
        onVendorAssign(true);
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
        onVendorAssign(false);
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
    const vendor = vendorList.find((vendor) => vendor.id === vendorID);

    return (
      <div>
        <Modal
          open={isVisible}
          onClose={() => {}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={style}>
            <VendorModal onClose={onModalClose} onAssignVendor={onAssignVendor} vendorList={vendorList} />
          </div>
        </Modal>

        {status === 'PENDING' && (
          <TitleContainer>
            <Button color={green} onClick={() => onApprove()}>
              Approve
            </Button>
            <Button color="#d22b2b" marginTop="4px" onClick={() => onReject()}>
              Reject
            </Button>
          </TitleContainer>
        )}

        {status === 'APPROVED' && (
          <ApprovedContainer>
            <VendorAssignedContainer>
              <ApprovedText>Vendor Assigned </ApprovedText>
              <ShowDetailsText
                onClick={() => {
                  setShowDetails(!showDetails);
                }}
              >
                {showDetailsText}
              </ShowDetailsText>
            </VendorAssignedContainer>
            {showDetails && (
              <ShowDetailsContainer>
                <DetailsContainer>
                  <DetailsText data-testid="vendor-name">{vendor?.name}</DetailsText>
                  <PhoneNumberContainer>
                    <PhoneNumberIcon>
                      <img src={phoneIcon} style={{ maxHeight: '70%' }} />
                    </PhoneNumberIcon>
                    <PhoneNumberText href={`tel:${vendor?.phoneNumber}`} data-testid="vendor-phone-number">
                      {vendor?.phoneNumber}
                    </PhoneNumberText>
                  </PhoneNumberContainer>
                </DetailsContainer>
              </ShowDetailsContainer>
            )}
          </ApprovedContainer>
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
