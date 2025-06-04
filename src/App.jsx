import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ComingSoon from './pages/ComingSoon';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    background: linear-gradient(rgb(43, 16, 85), #7597de);
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;