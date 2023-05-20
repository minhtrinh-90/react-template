import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { getUserInfo } from '../../../auth/redux/auth-slice';
import Footer from '../../components/organisms/footer';
import Header from '../../components/organisms/header';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import styles from './main-layout.module.css';

const MainLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
