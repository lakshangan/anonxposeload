import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
`;

const Logo = styled(Link)`
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  li {
    margin-left: 20px;
  }

  a {
    text-decoration: none;
    padding: 6px 15px;
    color: #fff;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:hover {
      background: #fff;
      color: #2b1055;
    }
  }
`;

function Navbar() {
  return (
    <Header>
      <Logo to="/">AnonXpose</Logo>
      <Nav>
        <ul>
          <li><Link to="/soon">Cyber crime investigation portal</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </Nav>
    </Header>
  );
}

export default Navbar;