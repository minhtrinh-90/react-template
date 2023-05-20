import { NavLink } from 'react-router-dom';

import { NavItem } from '../../molecules/main-nav/main-nav';
import styles from './main-nav-item.module.css';

type MainNavItemProps = {
  navItem: NavItem;
};

const MainNavItem = ({ navItem }: MainNavItemProps) => {
  return (
    <NavLink
      to={navItem.link}
      end
      className={({ isActive }) =>
        isActive ? styles.link + ' ' + styles.active : styles.link
      }
    >
      {navItem.text}
    </NavLink>
  );
};

export default MainNavItem;
