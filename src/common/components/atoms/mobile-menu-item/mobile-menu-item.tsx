import { Link } from 'react-router-dom';

import { NavItem } from '../../molecules/main-nav/main-nav';
import styles from './mobile-menu-item.module.css';

type MobileMenuItemProps = {
  item: NavItem;
};

const MobileMenuItem = ({ item }: MobileMenuItemProps) => {
  return (
    <Link key={item.text} to={item.link} className={styles.item}>
      {item.text}
    </Link>
  );
};

export default MobileMenuItem;
