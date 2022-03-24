import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import nav from '../../constans/nav';
import style from './header.module.scss';

const Header = () => {
  return (
    <Navbar className="border-bottom p-2">
      <Container>
        <Nav className="">
          {nav.map((item) => (
            <li className={style.li} key={item.name}>
              <NavLink className={({ isActive }) => (isActive ? style.active : '')} to={item.link}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
