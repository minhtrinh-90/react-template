import { Link } from 'react-router-dom';

import { FooterLink } from '../../organisms/footer/footer';
import styles from './footer-item.module.css';

type FooterItemProps = {
  item: FooterLink;
};

const FooterItem = ({ item }: FooterItemProps) => {
  return (
    <Link to={item.link} className={styles.link}>
      {item.text}
    </Link>
  );
};

export default FooterItem;
