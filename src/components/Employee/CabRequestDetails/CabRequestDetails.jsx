import loader from '../../../assets/loader.json';
import { red, green } from '../../colors.json';
import RequestStatusCard from '../../common/RequestStatusCard/RequestStatusCard';
import { formatTime } from '../../common/utils';
import fetchCabRequestDetailsService from '../../services/fetchCabRequestDetailsService.jsx';
import ScheduleCabDialogBox from '../ScheduleCab/ScheduleCabDialogBox';
import {
  Container,
  FilterContainer,
  Filters,
  CabRequests,
  FooterContainer,
  StatusTitleText,
  StatusText,
  LoaderContainer,
  Loader,
} from './CabRequestDetails.style';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Lottie from 'react-lottie';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

function handleError(e) {
  console.log(e);
  return <p>Unable to Process your request. Please reach out to Admin team. </p>;
}

const CabRequestDetails = () => {
  const [cabDetails, setCabDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const requestStatus = useRef('all');

  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const getCabDetails = async () => {
    try {
      fetchCabRequestDetailsService.fetchCabRequestDetails().then((response) => {
        const sortRequests = response?.data.sort((a, b) => a?.pickupTime.localeCompare(b?.pickupTime));
        setCabDetails(sortRequests);
        setFilteredRequests(sortRequests);
        setIsLoading(false);
      });
    } catch (e) {
      setIsLoading(false);
      handleError(e);
    }
  };

  useEffect(() => {
    getCabDetails();
  }, []);

  const handleChange = (event, type) => {
    if (type === 'status') {
      requestStatus.current = event.target.value;
    }
    filterRequests();
  };

  const filterRequests = () => {
    let filteredByRequestStatus = filterByRequestStatus(cabDetails);

    setFilteredRequests(filteredByRequestStatus);
  };

  const filterByRequestStatus = (requests) => {
    if (requestStatus.current === 'all') {
      return requests;
    }

    return requests.filter((request) => {
      return request.status === requestStatus.current;
    });
  };

  const Footer = ({ requestStatus }) => {
    const setColor = () => {
      if (requestStatus === 'APPROVED') return green;
      if (requestStatus === 'REJECTED' || requestStatus === 'DECLINED') return red;
      return undefined;
    };

    const color = setColor();
    return (
      <FooterContainer>
        <StatusTitleText>Status</StatusTitleText>
        <StatusText color={color}>{requestStatus}</StatusText>
      </FooterContainer>
    );
  };

  return (
    <Container>
      <FilterContainer>
        <Filters>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Request Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={requestStatus.current}
                label="Request status"
                onChange={(event) => {
                  handleChange(event, 'status');
                }}
                sx={{ fontFamily: 'roboto-regular' }}
                style={{ borderRadius: '24px', height: 40 }}
              >
                <MenuItem sx={{ fontFamily: 'roboto-regular' }} value={'all'}>
                  All
                </MenuItem>
                <MenuItem sx={{ fontFamily: 'roboto-regular' }} value={'PENDING'}>
                  Pending
                </MenuItem>
                <MenuItem sx={{ fontFamily: 'roboto-regular' }} value={'APPROVED'}>
                  Approved
                </MenuItem>
                <MenuItem sx={{ fontFamily: 'roboto-regular' }} value={'REJECTED'}>
                  Declined
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Filters>
        <ScheduleCabDialogBox />
      </FilterContainer>
      <CabRequests>
        {isLoading && (
          <LoaderContainer>
            <Loader>
              <Lottie options={loaderOptions} height="auto" width="100%" />
            </Loader>
          </LoaderContainer>
        )}
        {filteredRequests.map((cab, id) => (
          <RequestStatusCard
            key={id}
            id={cab?.id}
            date={cab?.pickupTime.slice(0, 10)}
            time={formatTime(cab?.pickupTime)}
            pickup={cab?.pickupLocation}
            drop={cab?.dropLocation}
            location
            footer={Footer}
            requestStatus={cab?.status}
          />
        ))}
      </CabRequests>
    </Container>
  );
};

export default CabRequestDetails;
