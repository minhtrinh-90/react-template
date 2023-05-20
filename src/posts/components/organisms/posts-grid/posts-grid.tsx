import { Post } from '../../../models/post';
import PostPreview from '../../molecules/post-preview';
import styles from './posts-grid.module.css';

type PostsGridProps = {
  posts: Post[];
};

const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <div className={styles.container}>
      {posts.map((post, index) => (
        <PostPreview key={index} post={post} />
      ))}
    </div>
  );
};

export default PostsGrid;
