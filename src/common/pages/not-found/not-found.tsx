import Subtitle from '../../components/atoms/subtitle';
import Title from '../../components/atoms/title';
import Footer from '../../components/organisms/footer';
import Header from '../../components/organisms/header';
import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Title>404 Not Found</Title>
        <Subtitle>
          Sorry, we couldn't find the page you're looking for.
        </Subtitle>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
