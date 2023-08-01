import loader from '../../../assets/loader.json';
import VendorCard from '../VendorCard';
import { Container, CardContainer, Loader } from './Vendors.style.js';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Lottie from 'react-lottie';

const Vendors = () => {
  const [vendorList, setVendorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
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

  useEffect(() => {
    getVendors();
  }, []);

  return (
    <Container isLoading={isLoading}>
      {isLoading && (
        <Loader>
          <Lottie options={loaderOptions} height="auto" width="100%" />
        </Loader>
      )}

      <CardContainer>
        {vendorList.map((vendor) => {
          if (vendor?.name === '') {
            return null;
          }
          return <VendorCard key={vendor?.id} name={vendor?.name} phoneNumber={vendor?.phoneNumber} />;
        })}
      </CardContainer>
    </Container>
  );
};

export default Vendors;
