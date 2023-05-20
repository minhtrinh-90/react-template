import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../auth/redux/auth-slice';
import postsReducer from '../posts/redux/posts-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
