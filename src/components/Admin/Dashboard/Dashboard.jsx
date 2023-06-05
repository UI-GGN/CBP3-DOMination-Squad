import AdminTab from '../AdminTab';
import Head from '../Head/Head';
import Requests from '../Requests';
import { Container, Details } from './Dashboard.style';
import { useState } from 'react';

const Dashboard = () => {
  const [selected, setSelected] = useState('Requests');

  const handleRoutes = (input) => {
    setSelected(input);
  };

  const getComponent = (input) => {
    switch (input) {
      case 'Home':
        return <Requests type={'admin'} />;
      case 'Routes':
        return <h1>Routes</h1>;
      case 'Profile':
        return <h1>Profile</h1>;
      default:
        return <Requests type={'admin'} />;
    }
  };

  return (
    <Container>
      <Head selected={selected} onPress={handleRoutes} />
      <Details>
        <AdminTab selected={selected} onPress={handleRoutes} />
        {getComponent(selected)}
      </Details>
    </Container>
  );
};

export default Dashboard;
