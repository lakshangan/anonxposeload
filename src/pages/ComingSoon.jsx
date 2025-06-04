import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Container = styled.div`
  background-color: rgb(43, 16, 85);
  color: #fff;
  min-height: 100vh;
  text-align: center;
  padding: 100px 0;
  position: relative;
`;

const AnimatedText = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  font-size: 30px;
  font-weight: bold;
  animation: ${blink} 1s infinite;
`;

const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

function ComingSoon() {
  return (
    <Container>
      <AnimatedText>Coming Soon...</AnimatedText>
      <img src="/stars.png" alt="stars" />
      <Logo>
        <img src="/logo.png" alt="logo" />
      </Logo>
    </Container>
  );
}

export default ComingSoon;