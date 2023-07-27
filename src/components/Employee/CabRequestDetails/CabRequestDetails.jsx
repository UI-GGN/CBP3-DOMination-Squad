import circle from '../../../assets/circle_icon.png';
import destination from '../../../assets/destination_icon.png';
import {
  CardDetailsContainer,
  DetailsContainer,
  LocationSegment,
  LocationPathIconSegment,
  LocationPathIcon,
  LocationDetails,
  TitleContainer,
  TitleText,
  DetailsText,
  HighlightedText,
  HorizontalLine,
  VerticalLine,
} from '../../common/RequestStatusCard/RequestStatusCard.style.js';
import fetchCabRequestDetailsService from '../../services/fetchCabRequestDetailsService.jsx';
import ScheduleCabDialogBox from '../ScheduleCab/ScheduleCabDialogBox.jsx';
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
  const timeConversion = (timeString) => {
    const timeWithAMPM = timeString.substring(11, 16);
    const hour = parseInt(timeWithAMPM.substring(0, 2), 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    return (hour % 12) + ':' + timeWithAMPM.substring(3, 5) + ' ' + ampm;
  };
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

  const sortedCabDetails = cabDetails.sort((a, b) => {
    const timeA = dayjs(a.pickupTime);
    const timeB = dayjs(b.pickupTime);
    return timeA.diff(timeB);
  });

  return (
    <>
      <ScheduleCabDialogBox />
      {sortedCabDetails.map((cab, id) => (
        <CardDetailsContainer key={id}>
          <TitleContainer>
            <TitleText>Date </TitleText>
            <TitleText>Pickup Time</TitleText>
          </TitleContainer>
          <DetailsContainer>
            {dayjs(cab.pickupTime).isToday() ? (
              <DetailsText>Today</DetailsText>
            ) : dayjs(cab.pickupTime).isTomorrow() ? (
              <DetailsText>Tomorrow</DetailsText>
            ) : (
              <DetailsText>{dayjs(cab.pickupTime).format('MMM D, YYYY')}</DetailsText>
            )}
            <HighlightedText>{timeConversion(cab.pickupTime)}</HighlightedText>
          </DetailsContainer>
          <HorizontalLine />

          <LocationSegment>
            <LocationPathIconSegment>
              <LocationPathIcon>
                <img src={circle} style={{ maxHeight: '70%' }} alt="icon" />
              </LocationPathIcon>
              <VerticalLine />
              <LocationPathIcon>
                <img src={destination} style={{ maxHeight: '70%' }} alt="icon" />
              </LocationPathIcon>
            </LocationPathIconSegment>
            <LocationDetails>
              <TitleText>Start Point</TitleText>
              <DetailsText style={{ marginBottom: 10 }}>{cab.pickupLocation}</DetailsText>
              <TitleText style={{ marginTop: 10 }}>End Point</TitleText>
              <DetailsText>{cab.dropLocation}</DetailsText>
            </LocationDetails>
          </LocationSegment>
          <HorizontalLine />

          <section className={'flex flex-row justify-between'}>
            <TitleText>Status</TitleText>
            <DetailsText>{cab.status}</DetailsText>
          </section>
        </CardDetailsContainer>
      ))}
    </>
  );
};

export default CabRequestDetails;
