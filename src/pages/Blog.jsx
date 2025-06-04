import styled from 'styled-components';

const Container = styled.div`
  background-color: rgb(43, 16, 85);
  min-height: 100vh;
  padding-top: 100px;
`;

const Title = styled.h1`
  color: #fa5705;
`;

function Blog() {
  return (
    <Container>
      <Title>Blogs about blockchain investigations</Title>
      <img src="/stars.png" alt="stars" style={{ position: 'absolute', top: 0 }} />
    </Container>
  );
}

export default Blog;