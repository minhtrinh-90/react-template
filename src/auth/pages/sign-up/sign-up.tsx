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
import SignUpDto, { signUpDtoSchema } from '../../models/signup.dto';
import { getUserInfo, selectAuthUser } from '../../redux/auth-slice';
import AuthService from '../../services/auth.service';
import styles from './sign-up.module.css';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpDto>({
    resolver: zodResolver(signUpDtoSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if user already signed in
  const user = useAppSelector(selectAuthUser);
  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const onSubmit = async (data: SignUpDto) => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await AuthService.signUp(data);
      await dispatch(getUserInfo()).unwrap();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          setError('email', {
            type: '409',
            message: 'Email already in use. Please use a different email.',
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
      <Title>Sign Up</Title>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Label htmlFor="email">Name</Label>
        <Input {...register('name')} type="text" autoComplete="name" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <Label htmlFor="email">Email</Label>
        <Input {...register('email')} type="email" autoComplete="email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <Label htmlFor="password">Password</Label>
        <Input
          {...register('password')}
          type="password"
          autoComplete="current-password"
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <div className={styles.buttonContainer}>
          <MainButton type="submit" disabled={isLoading}>
            Sign Up
          </MainButton>
        </div>
      </form>
      <Link to="/sign-in" className={styles.redirectLink}>
        Already have an account? Sign in here.
      </Link>
    </div>
  );
};

export default SignUp;
