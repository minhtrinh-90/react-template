import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { Post } from '../../../models/post';
import TagArray from '../tag-array';
import styles from './post-preview.module.css';

type PostPreviewProps = {
  post: Post;
};

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <div>
      <Link to="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={post.imageUrl} alt="" className={styles.image} />
          <p className={styles.dateTime}>
            <span>{format(new Date(post.updatedAt), 'yyyy.MM.dd')}</span>
            <span>{format(new Date(post.updatedAt), 'HH:mm')}</span>
          </p>
        </div>
        <p className={styles.title}>{post.title}</p>
      </Link>
      <TagArray tags={post.tags} />
    </div>
  );
};

export default PostPreview;
