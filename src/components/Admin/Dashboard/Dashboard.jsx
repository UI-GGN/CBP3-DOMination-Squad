import AdminTab from '../AdminTab';
import Head from '../Head/Head';
import Requests from '../Requests';
import { Container, Details } from './Dashboard.style';
import { useState } from 'react';

const Dashboard = () => {
  const [selected, setSelected] = useState('REQUESTS');

  const handleRoutes = (input) => {
    setSelected(input);
  };

  const getComponent = (input) => {
    switch (input) {
      case 'REQUESTS':
        return <Requests type={'admin'} />;
      case 'ROUTES':
        return <h1>Routes</h1>;
      default:
        return <Requests type={'admin'} />;
    }
  };

  return (
    <Container>
      <Head selected={selected} onPress={handleRoutes} />
      <Details>
        <AdminTab selected={selected} />
        {getComponent(selected)}
      </Details>
    </Container>
  );
};

export default Dashboard;
