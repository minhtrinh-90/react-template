import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/logo.svg';

import ErrorMessage from '../../../common/components/atoms/error-message';
import Input from '../../../common/components/atoms/input';
import Label from '../../../common/components/atoms/label';
import MainButton from '../../../common/components/atoms/main-button';
import Title from '../../../common/components/atoms/title';
import { useAppDispatch } from '../../../common/hooks/use-app-dispatch';
import { useAppSelector } from '../../../common/hooks/use-app-selector';
import SignInDto, { signInDtoSchema } from '../../models/signin.dto';
import { getUserInfo, selectAuthUser } from '../../redux/auth-slice';
import AuthService from '../../services/auth.service';
import styles from './sign-in.module.css';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInDto>({
    resolver: zodResolver(signInDtoSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if user already signed in
  const user = useAppSelector(selectAuthUser);
  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const onSubmit = async (data: SignInDto) => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await AuthService.signIn(data);
      await dispatch(getUserInfo()).unwrap();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setError('email', {
            type: '404',
            message: 'Your email is not correct',
          });
        }
        if (error.response?.status === 401) {
          setError('password', {
            type: '401',
            message: 'Your password is not correct',
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <Title>Sign In</Title>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Label htmlFor="email">Email</Label>
        <Input {...register('email')} type="email" autoComplete="email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <Label htmlFor="password">Password</Label>
        <Input
          {...register('password')}
          type="password"
          autoComplete="new-password"
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <div className={styles.buttonContainer}>
          <MainButton type="submit" disabled={isLoading}>
            Sign In
          </MainButton>
        </div>
      </form>
      <Link to="/sign-up" className={styles.redirectLink}>
        Don't have an account? Sign up here.
      </Link>
    </div>
  );
};

export default SignIn;
