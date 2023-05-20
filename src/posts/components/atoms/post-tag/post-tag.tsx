import styles from './post-tag.module.css';

type PostTagProps = {
  tag: string;
};

const PostTag = ({ tag }: PostTagProps) => {
  return <span className={styles.tag}>#{tag}</span>;
};

export default PostTag;
