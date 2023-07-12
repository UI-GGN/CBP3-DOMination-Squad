import { dark } from '../../colors.json';
import { generateCSV } from '../../common/utils.jsx';
import RequestCard from '../RequestCard/RequestCard.jsx';
import { Container, FilterContainer, Filters, CardContainer, Button } from './Request.style.js';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [requestType, setRequestType] = useState('all');
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

  useEffect(() => {
    getRequests();
    getVendors();
  }, []);

  return (
    <Container>
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
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'adhoc'}>Ad-hoc</MenuItem>
                <MenuItem value={'regular'}>Regular</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Filters>
        <Button color={dark} marginTop="4px" onClick={() => downloadCSV()}>
          Export requests
        </Button>
      </FilterContainer>
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
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Requests;
