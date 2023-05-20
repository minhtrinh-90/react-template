import axios from 'axios';

import { PaginationArgs } from '../../common/models/pagination.args';
import CreatePostDto from '../models/create-post.dto';
import { Post } from '../models/post';
import { UpdatePostDto } from '../models/update-post.dto';

const PostsService = {
  createPost: async (data: CreatePostDto) => {
    const res = await axios.post<Post>('/Posts', data);
    return res.data;
  },
  getPosts: (params?: PaginationArgs) =>
    axios.get<Post[]>('/posts', { params }),
  getPostDetails: (postId: string) => axios.get<Post>(`/posts/${postId}`),
  updatePost: (postId: string, data: UpdatePostDto) =>
    axios.patch<Post>(`/posts/${postId}`, data),
  deletePost: (postId: string) => axios.delete<Post>(`/posts/${postId}`),
};

export default PostsService;
