import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 1000;
  }
`;

const ParallaxImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const Moon = styled(ParallaxImage)`
  top: 15%;
  mix-blend-mode: screen;
`;

const MountainsFront = styled(ParallaxImage)`
  z-index: 10;
`;

const Text = styled.h2`
  position: absolute;
  color: #ff0000;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 6;
  right: -1250px;
`;

const Button = styled.a`
  position: absolute;
  top: 35%;
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 40px;
  background: #fff;
  color: #2b1055;
  font-size: 1.5em;
  z-index: 9;
  transform: translateY(100px);
  cursor: pointer;
`;

const Content = styled.div`
  position: relative;
  padding: 100px;
  background: #1c0522;

  h2 {
    font-size: 3.5em;
    margin-bottom: 10px;
    color: #fa5705;
  }

  p {
    font-size: 1em;
    color: #fff;
  }
`;

function Home() {
  const starsRef = useRef(null);
  const moonRef = useRef(null);
  const mountainsBehindRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const mountainsFrontRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      if (starsRef.current) starsRef.current.style.left = `${value * 0.25}px`;
      if (moonRef.current) moonRef.current.style.top = `${value * 1.05}px`;
      if (mountainsBehindRef.current) mountainsBehindRef.current.style.top = `${value * 0.5}px`;
      if (textRef.current) {
        textRef.current.style.marginRight = `${value * 4}px`;
        textRef.current.style.marginTop = `${value * 1.5}px`;
      }
      if (btnRef.current) btnRef.current.style.marginTop = `${value * 1.5}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Section>
        <ParallaxImage src="/stars.png" ref={starsRef} alt="stars" />
        <Moon src="/moon.png" ref={moonRef} alt="moon" />
        <ParallaxImage src="/mountains_behind.png" ref={mountainsBehindRef} alt="mountains behind" />
        <Text ref={textRef}>Blockchain investigation agency</Text>
        <Button ref={btnRef}>Create case</Button>
        <MountainsFront src="/mountains_front.png" ref={mountainsFrontRef} alt="mountains front" />
      </Section>
      <Content>
        <h2>Blockchain analysis</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aut iure distinctio earum officia, odit excepturi architecto, molestias minima aperiam voluptate eius asperiores saepe modi necessitatibus totam optio explicabo reiciendis debitis obcaecati quos ullam.</p>
        {/* Add more content as needed */}
      </Content>
    </>
  );
}

export default Home;