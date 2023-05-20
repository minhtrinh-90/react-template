import { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MainButton from '../../../common/components/atoms/main-button';
import Title from '../../../common/components/atoms/title';
import { useAppDispatch } from '../../../common/hooks/use-app-dispatch';
import { useAppSelector } from '../../../common/hooks/use-app-selector';
import { selectAuthUser, signOut } from '../../redux/auth-slice';
import styles from './sign-out.module.css';

const SignOut = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectAuthUser);

  const logout = useCallback(async () => {
    await dispatch(signOut()).unwrap();
  }, [dispatch]);

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div className={styles.container}>
      <Title>{user ? 'Signing out...' : 'Signed out successfully'}</Title>
      <Link to="/">
        <MainButton>Go back</MainButton>
      </Link>
    </div>
  );
};

export default SignOut;
