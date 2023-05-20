import { Dialog } from '@headlessui/react';
import { HiXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/logo.svg';

import MobileMenuItem from '../../atoms/mobile-menu-item';
import { NavItem } from '../main-nav/main-nav';
import styles from './mobile-menu.module.css';

type MobileMenuProps = {
  navItems: NavItem[];
  userItems: NavItem[];
  open: boolean;
  onClose: (state: boolean) => void;
};

const MobileMenu = ({
  navItems,
  userItems,
  open,
  onClose,
}: MobileMenuProps) => {
  return (
    <Dialog as="div" className={styles.dialog} open={open} onClose={onClose}>
      <div className={styles.backdrop} />
      <Dialog.Panel className={styles.panel}>
        <div className={styles.topBar}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.srOnly}>Company Logo</span>
            <Logo className={styles.logoImage} />
          </Link>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => onClose(false)}
          >
            <span className={styles.srOnly}>Close menu</span>
            <HiXMark className={styles.closeIcon} aria-hidden="true" />
          </button>
        </div>
        <div className={styles.menuRoot}>
          <div className={styles.menuContainer}>
            <div className={styles.itemsContainer}>
              {navItems.map((item) => (
                <MobileMenuItem key={item.text} item={item} />
              ))}
            </div>
            <div className={styles.itemsContainer}>
              {userItems.map((item) => (
                <MobileMenuItem key={item.text} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenu;
