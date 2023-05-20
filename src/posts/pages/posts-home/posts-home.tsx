import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { RootState } from '../../../app/store';
import MainButton from '../../../common/components/atoms/main-button';
import { useAppDispatch } from '../../../common/hooks/use-app-dispatch';
import { useAppSelector } from '../../../common/hooks/use-app-selector';
import { FetchStatus } from '../../../common/models/fetch-status';
import PostsGrid from '../../components/organisms/posts-grid';
import { fetchPosts, selectAllPosts } from '../../redux/posts-slice';
import styles from './posts-home.module.css';

const PostsHome = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts).slice(0, 8);
  const { status } = useAppSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (status == FetchStatus.idle) dispatch(fetchPosts());
  }, [dispatch, status]);

  return (
    <div className={styles.container}>
      <PostsGrid posts={posts} />
      <div className={styles.buttonContainer}>
        <Link to="/posts/all">
          <MainButton>Posts</MainButton>
        </Link>
      </div>
    </div>
  );
};

export default PostsHome;
