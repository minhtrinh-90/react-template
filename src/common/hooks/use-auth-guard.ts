import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { selectAuthState, selectAuthUser } from '../../auth/redux/auth-slice';
import { useAppSelector } from './use-app-selector';

export const useAuthGuard = () => {
  const navigate = useNavigate();

  // Redirect if user is not signed in
  const user = useAppSelector(selectAuthUser);
  const authState = useAppSelector(selectAuthState);

  useEffect(() => {
    if (authState != 'init' && !user) navigate('/unauthorized');
  }, [user, authState, navigate]);
};
