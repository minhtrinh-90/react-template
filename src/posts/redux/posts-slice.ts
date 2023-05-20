import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { compareDesc } from 'date-fns';

import { RootState } from '../../app/store';
import { FetchStatus } from '../../common/models/fetch-status';
import { Post } from '../models/post';
import PostsService from '../services/posts.service';

const PAGE_SIZE = 8;

const postsAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
});

const initialState = postsAdapter.getInitialState({
  page: 1,
  hasMore: true,
  status: FetchStatus.idle,
});

export const fetchPosts = createAsyncThunk<
  Post[],
  undefined,
  { state: RootState }
>('posts/fetchPosts', async (_, { getState }) => {
  const { page } = getState().posts;
  const res = await PostsService.getPosts({ page, size: PAGE_SIZE });
  return res.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    resetPosts: (state) => {
      state.hasMore = true;
      state.page = 1;
      state.status = FetchStatus.idle;
      postsAdapter.removeAll(state);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = FetchStatus.loading;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.page++;
      state.status = FetchStatus.succeeded;
      if (action.payload.length < PAGE_SIZE) {
        state.hasMore = false;
      }
      postsAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = FetchStatus.failed;
    });
  },
});

export const { resetPosts } = postsSlice.actions;

export default postsSlice.reducer;

export const { selectAll: selectAllPosts } = postsAdapter.getSelectors(
  (state: RootState) => state.posts,
);
