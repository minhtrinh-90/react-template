import MainNav from '../../molecules/main-nav';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <MainNav />
    </header>
  );
};

export default Header;
