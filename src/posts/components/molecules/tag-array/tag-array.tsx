import PostTag from '../../atoms/post-tag';
import styles from './tag-array.module.css';

type TagArrayProps = {
  tags: string;
};

const TagArray = ({ tags: rawTags }: TagArrayProps) => {
  const tags = rawTags.split(',');

  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <PostTag key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default TagArray;
