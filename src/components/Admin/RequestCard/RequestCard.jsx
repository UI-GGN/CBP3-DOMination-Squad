import phoneIcon from '../../../assets/call.png';
import trash from '../../../assets/trash.png';
import VendorModal from '../../Admin/VendorModal';
import { green, red } from '../../colors.json';
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';
import RequestStatusCard from '../../common/RequestStatusCard/RequestStatusCard';
import StyledButton from '../../common/StyledButton/StyledButton';
import { getModalWidth } from '../../common/utils.jsx';
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
  ImageContainer,
  PhoneNumberText,
} from './RequestCard.style.js';
import { Modal } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';

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
  isLoading,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState(requestStatus);
  const [showDetails, setShowDetails] = useState(false);
  const [vendorID, setVendorID] = useState(vendorId);
  const [modalData, setModalData] = useState({
    data: '',
    type: 'vendor_modal',
  });

  const matchesPhone = useMediaQuery('(max-width:600px)');
  const matchesTablet = useMediaQuery('(max-width:800px)');
  const matchesWiderThanTablet = useMediaQuery('(max-width:1000px)');
  const matchesLessThan1200 = useMediaQuery('(max-width:1200px)');

  const showDetailsText = showDetails ? 'Hide Details' : 'Show details';

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: getModalWidth(matchesPhone, matchesTablet, matchesWiderThanTablet, matchesLessThan1200, modalData.type),
    backgroundColor: 'white',
    borderRadius: 20,
    boxShadow: 24,
    outline: 0,
  };

  const onAssignVendor = (input) => {
    setIsVisible(false);
    isLoading(true);

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
        isLoading(false);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  };

  const onRejectVendor = () => {
    setIsVisible(false);
    isLoading(true);

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ status: 'REJECTED' }),
    };
    fetch(`https://shuttle-service-tw.vercel.app/api/v1/cab-request/${id}`, options)
      .then(() => {
        setStatus('REJECTED');
        onVendorAssign(false);
        isLoading(false);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  };

  const onRemoveVendor = () => {
    setIsVisible(false);
    isLoading(true);

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ status: 'PENDING' }),
    };
    fetch(`https://shuttle-service-tw.vercel.app/api/v1/cab-request/${id}`, options)
      .then(() => {
        setStatus('PENDING');
        isLoading(false);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  };

  const onModalClose = () => {
    setIsVisible(false);
  };

  const onApprove = () => {
    setIsVisible(true);
    setModalData({
      data: <VendorModal onClose={onModalClose} onAssignVendor={onAssignVendor} vendorList={vendorList} />,
      type: 'vendor_modal',
    });
  };

  const onReject = () => {
    setIsVisible(true);
    setModalData({
      data: <ConfirmationModal onClose={onModalClose} onConfirm={onRejectVendor} confirmText="Reject" />,
      type: 'confirmation_modal',
    });
  };

  const onRemove = () => {
    setIsVisible(true);
    setModalData({
      data: <ConfirmationModal onClose={onModalClose} onConfirm={onRemoveVendor} confirmText="Remove" />,
      type: 'confirmation_modal',
    });
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
          <div style={style}>{modalData.data}</div>
        </Modal>

        {status === 'PENDING' && (
          <TitleContainer>
            <StyledButton color={green} textColor={green} width="40%" onClick={() => onApprove()}>
              Approve
            </StyledButton>
            <StyledButton color={red} textColor={red} width="40%" onClick={() => onReject()}>
              Reject
            </StyledButton>
          </TitleContainer>
        )}

        {status === 'APPROVED' && (
          <ApprovedContainer>
            <VendorAssignedContainer>
              <ApprovedText>Vendor Assigned </ApprovedText>
              <ImageContainer>
                <img src={trash} onClick={() => onRemove()} />
              </ImageContainer>
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
            <ShowDetailsText
              onClick={() => {
                setShowDetails(!showDetails);
              }}
            >
              {showDetailsText}
            </ShowDetailsText>
            {/* <ReassignVendorText onClick={() => onRemove()}>Reassign vendor</ReassignVendorText> */}
          </ApprovedContainer>
        )}

        {status === 'REJECTED' && (
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
