import circle from '../../../assets/circle_icon.png';
import destination from '../../../assets/destination_icon.png';
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
  HorizontalLine,
  VerticalLine,
} from '../../common/RequestStatusCard/RequestStatusCard.style.js';
import fetchCabRequestDetailsService from '../../services/fetchCabRequestDetailsService.jsx';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import { useEffect, useState } from 'react';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

function handleError(e) {
  console.log(e);
  return <p>Unable to Process your request. Please reach out to Admin team. </p>;
}

const CabRequestDetails = () => {
  const [response, setResponse] = useState([]);
  const getCabDetails = async () => {
    try {
      fetchCabRequestDetailsService.fetchCabRequestDetails().then((response) => setResponse(response.data));
      setResponse(response);
      // var data = [
      //   {
      //     id: 5,
      //     createdAt: '2023-06-12T08:31:16.653Z',
      //     updatedAt: '2023-06-12T08:31:16.653Z',
      //     employeeId: '12345',
      //     employeeName: 'Shivansh',
      //     pickupLocation: 'Guru Dronacharya Metro Station',
      //     dropLocation: 'Thoughtworks Technologies',
      //     pickupTime: '2023-06-12T10:30:18.252Z',
      //     status: 'PENDING',
      //     deleted: false,
      //     routeId: null,
      //   },
      //   {
      //     id: 5,
      //     createdAt: '2023-06-07T08:31:16.653Z',
      //     updatedAt: '2023-06-07T08:31:16.653Z',
      //     employeeId: '12345',
      //     employeeName: 'Shivansh',
      //     pickupLocation: 'Guru Dronacharya Metro Station',
      //     dropLocation: 'Thoughtworks Technologies',
      //     pickupTime: '2023-06-13T10:30:18.252Z',
      //     status: 'PENDING',
      //     deleted: false,
      //     routeId: null,
      //   },
      //   {
      //     id: 5,
      //     createdAt: '2023-06-07T08:31:16.653Z',
      //     updatedAt: '2023-06-07T08:31:16.653Z',
      //     employeeId: '12345',
      //     employeeName: 'Shivansh',
      //     pickupLocation: 'Guru Dronacharya Metro Station',
      //     dropLocation: 'Thoughtworks Technologies',
      //     pickupTime: '2023-08-30T10:30:18.252Z',
      //     status: 'PENDING',
      //     deleted: false,
      //     routeId: null,
      //   },
      //   {
      //     id: 4,
      //     createdAt: '2023-06-07T08:31:16.653Z',
      //     updatedAt: '2023-06-07T08:31:16.653Z',
      //     employeeId: '12345',
      //     employeeName: 'Malan',
      //     pickupLocation: 'Guru Dronacharya Metro Station',
      //     dropLocation: 'Thoughtworks Technologies',
      //     pickupTime: '2023-08-31T10:30:18.252Z',
      //     status: 'PENDING',
      //     deleted: false,
      //     routeId: null,
      //   },
      //   {
      //     id: 3,
      //     createdAt: '2023-06-07T08:31:16.653Z',
      //     updatedAt: '2023-06-07T08:31:16.653Z',
      //     employeeId: '12345',
      //     employeeName: 'Shivam',
      //     pickupLocation: 'Guru Dronacharya Metro Station',
      //     dropLocation: 'Thoughtworks Technologies',
      //     pickupTime: '2023-09-01T10:30:18.252Z',
      //     status: 'PENDING',
      //     deleted: false,
      //     routeId: null,
      //   },
      //   {
      //     id: 2,
      //     createdAt: '2023-06-07T08:31:16.653Z',
      //     updatedAt: '2023-06-07T08:31:16.653Z',
      //     employeeId: '12345',
      //     employeeName: 'Shivam',
      //     pickupLocation: 'Guru Dronacharya Metro Station',
      //     dropLocation: 'Thoughtworks Technologies',
      //     pickupTime: '2023-09-01T10:30:18.252Z',
      //     status: 'PENDING',
      //     deleted: false,
      //     routeId: null,
      //   },
      //   {
      //     id: 1,
      //     createdAt: '2023-06-07T08:31:16.653Z',
      //     updatedAt: '2023-06-07T08:31:16.653Z',
      //     employeeId: '12345',
      //     employeeName: 'Shivam',
      //     pickupLocation: 'Guru Dronacharya Metro Station',
      //     dropLocation: 'Thoughtworks Technologies',
      //     pickupTime: '2023-09-01T10:30:18.252Z',
      //     status: 'PENDING',
      //     deleted: false,
      //     routeId: null,
      //   },
      // ];
      // setResponse(data);
    } catch (e) {
      handleError(e);
    }
  };

  useEffect(() => {
    getCabDetails();
  });

  return (
    <>
      {response.map((rdata, id) => (
        <CardDetailsContainer key={id}>
          <HeaderContainer>
            <HeaderText>Date </HeaderText>
            <HeaderText>Pickup Time</HeaderText>
          </HeaderContainer>
          <DetailsContainer>
            {dayjs(rdata.pickupTime).isToday() ? (
              <DetailsText>Today</DetailsText>
            ) : dayjs(rdata.pickupTime).isTomorrow() ? (
              <DetailsText>Tomorrow</DetailsText>
            ) : (
              <DetailsText>{dayjs(rdata.pickupTime).format('MMM D, YYYY')}</DetailsText>
            )}
            <HighlightedText>{dayjs(rdata.pickupTime).format('hh:mm A')}</HighlightedText>
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
              <DetailsText style={{ marginBottom: 10 }}>{rdata.pickupLocation}</DetailsText>
              <HeaderText style={{ marginTop: 10 }}>End Point</HeaderText>
              <DetailsText>{rdata.dropLocation}</DetailsText>
            </LocationDetails>
          </LocationSegment>
          <HorizontalLine />

          <section className={'flex flex-row justify-between'}>
            <HeaderText>Status</HeaderText>
            <DetailsText>{rdata.status}</DetailsText>
          </section>
        </CardDetailsContainer>
      ))}
    </>
  );
};

export default CabRequestDetails;
