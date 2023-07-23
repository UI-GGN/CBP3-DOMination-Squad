import { purple, dark } from '../../colors.json';
import StyledButton from '../../common/StyledButton/StyledButton';
import { generateCSV } from '../../common/utils.jsx';
import RequestCard from '../RequestCard/RequestCard.jsx';
import cross from './../../../assets/cross.png';
import loader from './../../../assets/loader.json';
import tick from './../../../assets/tick.png';
import {
  Container,
  Loader,
  FilterContainer,
  Filters,
  CardContainer,
  AlertContainer,
  ImageContainer,
  AlertText,
} from './Request.style.js';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Lottie from 'react-lottie';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(true);
  const [requestType, setRequestType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const alertIcon = alertType ? tick : cross;
  const alertText = alertType ? 'Vendor assigned successfully!' : 'Request declined!';

  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const csvHeader = [
    { label: 'ID', key: 'id' },
    { label: 'Employee ID', key: 'employeeId' },
    { label: 'Employee Name', key: 'employeeName' },
    { label: 'Project Code', key: 'projectCode' },
    { label: 'Date', key: 'date' },
    { label: 'Time', key: 'time' },
    { label: 'Pickup location', key: 'pickupLocation' },
    { label: 'Drop location', key: 'dropLocation' },
    { label: 'Status', key: 'status' },
  ];

  const filterRequests = (requestType) => {
    let filteredRequests = [];
    if (requestType === 'adhoc') {
      filteredRequests = requests.filter((request) => {
        let pickup = new Date(request.pickupTime);
        let expire = new Date(request.expireDate);
        return pickup.getTime() == expire.getTime();
      });
    } else if (requestType === 'regular') {
      filteredRequests = requests.filter((request) => {
        let pickup = new Date(request.pickupTime);
        let expire = new Date(request.expireDate);
        return pickup.getTime() != expire.getTime();
      });
    } else {
      filteredRequests = requests;
    }

    setFilteredRequests(filteredRequests);
  };

  const handleChange = (event) => {
    setRequestType(event.target.value);
    filterRequests(event.target.value);
  };

  const getRequests = () => {
    axios
      .get('https://shuttle-service-tw.vercel.app/api/v1/cab-request')
      .then((response) => {
        const sortRequests = response?.data.sort((a, b) => a?.pickupTime.localeCompare(b?.pickupTime));
        setRequests(sortRequests);
        setFilteredRequests(sortRequests);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getVendors = () => {
    axios
      .get('https://shuttle-service-tw.vercel.app/api/v1/vendor')
      .then((response) => {
        setVendorList(response?.data);
        setIsLoading(false);
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

  const downloadCSV = () => {
    const csvRequest = filteredRequests.map((obj) => ({
      ...obj,
      date: formatDate(obj.pickupTime),
      time: formatTime(obj.pickupTime),
    }));

    generateCSV(csvHeader, csvRequest, 'Employee requests');
  };

  const handleAlert = (input) => {
    setAlertType(input);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const handleLoader = (input) => {
    setIsLoading(input);
  };

  useEffect(() => {
    getRequests();
    getVendors();
  }, []);

  return (
    <Container isLoading={isLoading}>
      {isLoading && (
        <Loader>
          <Lottie options={loaderOptions} height="auto" width="100%" />
        </Loader>
      )}
      {showAlert && (
        <AlertContainer alertType={alertType}>
          <ImageContainer>
            <img src={alertIcon} />
          </ImageContainer>
          <AlertText>{alertText}</AlertText>
        </AlertContainer>
      )}
      {!isLoading && (
        <FilterContainer>
          <Filters>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Request type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={requestType}
                  label="Request type"
                  onChange={handleChange}
                  sx={{ fontFamily: 'roboto-regular' }}
                  style={{ borderRadius: '24px', height: 40 }}
                >
                  <MenuItem sx={{ fontFamily: 'roboto-regular' }} value={'all'}>
                    All
                  </MenuItem>
                  <MenuItem sx={{ fontFamily: 'roboto-regular' }} value={'adhoc'}>
                    Ad-hoc
                  </MenuItem>
                  <MenuItem sx={{ fontFamily: 'roboto-regular' }} value={'regular'}>
                    Regular
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Filters>
          <StyledButton color={purple} textColor={dark} width="10%" onClick={() => downloadCSV()}>
            Export requests
          </StyledButton>
        </FilterContainer>
      )}

      <CardContainer>
        {filteredRequests.map((request) => {
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
              vendorList={vendorList}
              vendorId={request?.vendorId}
              onVendorAssign={handleAlert}
              isLoading={handleLoader}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Requests;
