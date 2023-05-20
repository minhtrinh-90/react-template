import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { RootState } from '../../../app/store';
import Spinner from '../../../common/components/atoms/spinner';
import Title from '../../../common/components/atoms/title';
import { useAppDispatch } from '../../../common/hooks/use-app-dispatch';
import { useAppSelector } from '../../../common/hooks/use-app-selector';
import { FetchStatus } from '../../../common/models/fetch-status';
import PostsGrid from '../../components/organisms/posts-grid';
import { fetchPosts, selectAllPosts } from '../../redux/posts-slice';
import styles from './posts-list.module.css';

const PostsList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const { status, hasMore } = useAppSelector((state: RootState) => state.posts);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && status != FetchStatus.loading && hasMore) {
      dispatch(fetchPosts());
    }
  }, [inView, dispatch, hasMore, status]);

  return (
    <div className={styles.container}>
      <Title>Posts</Title>
      <PostsGrid posts={posts} />
      {status == FetchStatus.loading && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
      <div ref={ref} className="w-0 h-1" />
    </div>
  );
};

export default PostsList;
