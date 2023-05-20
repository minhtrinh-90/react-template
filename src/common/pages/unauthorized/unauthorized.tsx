import { Link } from 'react-router-dom';

import Subtitle from '../../components/atoms/subtitle';
import Title from '../../components/atoms/title';
import Footer from '../../components/organisms/footer';
import Header from '../../components/organisms/header';
import styles from './unauthorized.module.css';

const Unauthorized = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Title>You are not signed in yet.</Title>
        <Subtitle>
          Try{' '}
          <Link to="/sign-in" className={styles.link}>
            Sign In
          </Link>{' '}
          or{' '}
          <Link to="/sign-up" className={styles.link}>
            Sign Up.
          </Link>
        </Subtitle>
      </main>
      <Footer />
    </div>
  );
};

export default Unauthorized;
