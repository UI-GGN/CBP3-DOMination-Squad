import RequestStatusCard from '../../common/RequestStatusCard/RequestStatusCard.jsx';
import VendorModal from '../VendorModal';
import { Container, CardContainer } from './Request.style.js';
import { Modal } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

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

  const getRequests = () => {
    axios
      .get('https://cab-schedule-serverless.vercel.app/api/v1/cab-request')
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formatDate = (input) => {
    const date = new Date(input);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var year = date.getFullYear();
    return day + '-' + month + '-' + year;
  };

  const formatTime = (input) => {
    const date = new Date(input);
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  };

  const onAssignVendor = (request) => {
    setIsVisible(true);
    setSelectedRequest(request);
  };

  const onApproveRequest = () => {
    setIsVisible(false);
  };

  const onModalClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <Container>
      <Modal
        open={isVisible}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <VendorModal onClose={onModalClose} onApprove={onApproveRequest} request={selectedRequest} />
        </div>
      </Modal>
      <CardContainer>
        {requests.map((request) => {
          return (
            <RequestStatusCard
              key={request.id}
              name={request.employeeName}
              employeeID={request.employeeId}
              date={formatDate(request.pickupTime)}
              time={formatTime(request.pickupTime)}
              pickup={request.pickupLocation}
              drop={request.dropLocation}
              onApprove={() => onAssignVendor(request)}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Requests;
