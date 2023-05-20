import axios, { AxiosResponse } from 'axios';

import { User } from '../../users/models/user';
import SignInDto from '../models/signin.dto';
import SignUpDto from '../models/signup.dto';

const AuthService = {
  signIn: (data: SignInDto) => axios.post('/auth/signin', data),
  signUp: (data: SignUpDto) => axios.post('/auth/signup', data),
  signOut: () => axios.post('/auth/signout'),
  getUserInfo: async () => {
    const res: AxiosResponse<User> = await axios.get('/auth/me');
    return res.data;
  },
};

export default AuthService;
