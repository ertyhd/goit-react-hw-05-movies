import { NavLink } from 'react-router-dom';
import items from './items';
import style from './navbar.module.css';

// const getFullName = ({ isActive }) => {
//   return isActive ? `${style.link} ${style.active}` : `${style.link}`;
// };

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={style.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={style.menu}>{elements}</ul>;
};

export default Navbar;
