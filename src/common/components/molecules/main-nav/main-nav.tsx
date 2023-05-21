import { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/logo.svg';

import { selectAuthUser } from '../../../../auth/redux/auth-slice';
import { useAppSelector } from '../../../hooks/use-app-selector';
import MainNavItem from '../../atoms/main-nav-item';
import MobileMenu from '../mobile-menu';
import styles from './main-nav.module.css';

export type NavItem = {
  text: string;
  link: string;
};

const navItems: NavItem[] = [
  { text: 'Product', link: '#' },
  { text: 'Features', link: '#' },
  { text: 'Marketplace', link: '#' },
  { text: 'Company', link: '#' },
];

const MainNav = () => {
  const user = useAppSelector(selectAuthUser);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const userItems: NavItem[] = [{ text: 'Sign In', link: '/sign-in' }];

  return (
    <nav className={styles.nav} aria-label="Global">
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <span className={styles.srOnly}>Company Logo</span>
          <Logo className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.mobileButtonContainer}>
        <button
          type="button"
          className={styles.mobileButtonContainer}
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className={styles.srOnly}>Open main menu</span>
          <HiBars3 className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className={styles.itemsContainer}>
        {navItems.map((item) => (
          <MainNavItem key={item.text} navItem={item} />
        ))}
      </div>
      <div className={styles.signInContainer}>
        {user ? (
          <Link to="/sign-out" className={styles.signInLink}>
            Sign out <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : (
          <Link to="/sign-in" className={styles.signInLink}>
            Sign in <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
      <MobileMenu
        navItems={navItems}
        userItems={userItems}
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      />
    </nav>
  );
};

export default MainNav;
