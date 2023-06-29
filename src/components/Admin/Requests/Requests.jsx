import RequestCard from '../RequestCard/RequestCard.jsx';
import { Container, CardContainer } from './Request.style.js';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Requests = () => {
  const [requests, setRequests] = useState([]);

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
    day = day < 10 ? '0' + day : day;
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

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <Container>
      <CardContainer>
        {requests.map((request) => {
          return (
            <RequestCard
              key={request?.id}
              id={request?.id}
              requestStatus={request?.status}
              name={request?.employeeName}
              employeeID={request?.employeeId}
              projectCode={request?.projectCode}
              date={formatDate(request?.pickupTime)}
              time={formatTime(request?.pickupTime)}
              pickup={request?.pickupLocation}
              drop={request?.dropLocation}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Requests;
