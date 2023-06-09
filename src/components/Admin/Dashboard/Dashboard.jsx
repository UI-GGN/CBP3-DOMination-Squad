import AdminTab from '../AdminTab';
import Head from '../Head/Head';
import Requests from '../Requests';
import Routes from '../Routes/Routes';
import { Container, Details, Content } from './Dashboard.style';
import { useState } from 'react';

const Dashboard = () => {
  const [selected, setSelected] = useState('REQUESTS');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleRoutes = (input) => {
    setSelected(input);
  };

  const handleHeaderVisibility = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  const getComponent = (input) => {
    switch (input) {
      case 'REQUESTS':
        return <Requests type={'admin'} />;
      case 'ROUTES':
        return <Routes />;
      default:
        return <Requests type={'admin'} />;
    }
  };

  return (
    <Container>
      {isHeaderVisible && <Head selected={selected} onPress={handleRoutes} onHeaderClose={handleHeaderVisibility} />}
      <Details>
        <AdminTab selected={selected} onIconPress={handleHeaderVisibility} isHeaderVisible={isHeaderVisible} />
        <Content>{getComponent(selected)}</Content>
      </Details>
    </Container>
  );
};

export default Dashboard;
