import { green } from '../../colors.json';
import cab_background from './../../../assets/cab-about.jpg';
import { Container, Title, Content, Header, Description, ImageContainer } from './About.style.js';

const About = () => {
  return (
    <Container>
      <Content>
        <Title>onTrack</Title>
        <Description color={green}>
          This is an initiative by Thoughtworks Gurgaon office in order to help schedule cab requests in an efficient
          way
        </Description>
        <Header>What is the problem?</Header>
        <Description color="gray">
          Employees who want to come to the office have to call admin to request for a cab. The admin then assigns a
          vendor for that employee. When the office has high footfall, this process becomes cumbersome for both
          employees and admin.
        </Description>
        <Header>How can we solve it?</Header>
        <Description color="gray">
          The idea is to design a website where employees can schedule a cab - this request can be either an adhoc
          request or a regular one. The system also provides admin the ability to view these requests and take actions
          like approve or decline the request.
        </Description>
      </Content>
      <ImageContainer>
        <img src={cab_background} style={{ height: '100%', width: '100%' }} />
      </ImageContainer>
    </Container>
  );
};

export default About;
