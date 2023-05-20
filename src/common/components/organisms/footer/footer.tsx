import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import FooterItem from '../../atoms/footer-item';
import { NavItem } from '../../molecules/main-nav/main-nav';
import styles from './footer.module.css';

const footerItems: NavItem[] = [
  { text: 'About', link: '#' },
  { text: 'Blog', link: '#' },
  { text: 'Jobs', link: '#' },
  { text: 'Press', link: '#' },
  { text: 'Accessibility', link: '#' },
  { text: 'Partners', link: '#' },
];

const socialItems = [
  {
    name: 'Facebook',
    href: '#',
    icon: FaFacebook,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: FaInstagram,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: FaTwitter,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: FaGithub,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: FaYoutube,
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <nav className={styles.nav} aria-label="Footer">
          {footerItems.map((item) => (
            <div key={item.text} className={styles.navItem}>
              <Link to={item.link} className={styles.navLink}>
                {item.text}
              </Link>
            </div>
          ))}
        </nav>
        <div className={styles.socialContainer}>
          {socialItems.map((item) => (
            <Link key={item.name} to={item.href} className={styles.socialItem}>
              <span className={styles.srOnly}>{item.name}</span>
              <item.icon className={styles.socialIcon} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className={styles.creditText}>
          &copy; 2023 minhtrinh.dev All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
