import Header from '../../common/Header';
import About from '../About';
import Requests from '../Requests';
import Vendors from '../Vendors';
import { Container, Details, Content } from './Dashboard.style';
import { useState } from 'react';

const Dashboard = () => {
  const [selected, setSelected] = useState('REQUESTS');

  const handleRoutes = (input) => {
    setSelected(input);
  };

  const getComponent = (input) => {
    switch (input) {
      case 'REQUESTS':
        return <Requests />;
      case 'VENDORS':
        return <Vendors />;
      case 'ABOUT':
        return <About />;
      default:
        return <Requests type={'admin'} />;
    }
  };

  return (
    <Container>
      <Details>
        <Header selected={selected} onPress={handleRoutes} />
        <Content>{getComponent(selected)}</Content>
      </Details>
    </Container>
  );
};

export default Dashboard;
