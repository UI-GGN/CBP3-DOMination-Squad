import AdminTab from '../AdminTab';
import Header from '../Header';
import Requests from '../Requests';
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
        return <Requests />;
      // case 'ROUTES':
      //   return <Routes />;
      default:
        return <Requests type={'admin'} />;
    }
  };

  return (
    <Container>
      {isHeaderVisible && <Header selected={selected} onPress={handleRoutes} onHeaderClose={handleHeaderVisibility} />}
      <Details>
        <AdminTab selected={selected} onIconPress={handleHeaderVisibility} isHeaderVisible={isHeaderVisible} />
        <Content>{getComponent(selected)}</Content>
      </Details>
    </Container>
  );
};

export default Dashboard;
