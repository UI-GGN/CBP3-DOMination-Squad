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
  const [cabDetails, setCabDetails] = useState([]);
  const getCabDetails = async () => {
    try {
      fetchCabRequestDetailsService.fetchCabRequestDetails().then((response) => setCabDetails(response.data));
    } catch (e) {
      handleError(e);
    }
  };

  useEffect(() => {
    getCabDetails();
  }, []);

  return (
    <>
      {cabDetails.map((cab, id) => (
        <CardDetailsContainer key={id}>
          <HeaderContainer>
            <HeaderText>Date </HeaderText>
            <HeaderText>Pickup Time</HeaderText>
          </HeaderContainer>
          <DetailsContainer>
            {dayjs(cab.pickupTime).isToday() ? (
              <DetailsText>Today</DetailsText>
            ) : dayjs(cab.pickupTime).isTomorrow() ? (
              <DetailsText>Tomorrow</DetailsText>
            ) : (
              <DetailsText>{dayjs(cab.pickupTime).format('MMM D, YYYY')}</DetailsText>
            )}
            <HighlightedText>{dayjs(cab.pickupTime).format('hh:mm A')}</HighlightedText>
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
              <DetailsText style={{ marginBottom: 10 }}>{cab.pickupLocation}</DetailsText>
              <HeaderText style={{ marginTop: 10 }}>End Point</HeaderText>
              <DetailsText>{cab.dropLocation}</DetailsText>
            </LocationDetails>
          </LocationSegment>
          <HorizontalLine />

          <section className={'flex flex-row justify-between'}>
            <HeaderText>Status</HeaderText>
            <DetailsText>{cab.status}</DetailsText>
          </section>
        </CardDetailsContainer>
      ))}
    </>
  );
};

export default CabRequestDetails;
