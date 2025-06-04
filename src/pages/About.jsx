import styled from 'styled-components';

const Container = styled.div`
  background-color: rgb(43, 16, 85);
  min-height: 100vh;
  padding-top: 100px;
  text-align: center;
`;

const Title = styled.h1`
  color: #fa5705;
  font-size: 500%;
`;

function About() {
  return (
    <Container>
      <Title className="animation-fading">About us</Title>
      <img src="/stars.png" alt="stars" />
    </Container>
  );
}

export default About;