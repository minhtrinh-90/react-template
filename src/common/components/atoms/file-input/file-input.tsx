import { ComponentProps } from 'react';

import styles from './file-input.module.css';

const FileInput = (
  props: Omit<ComponentProps<'input'>, 'className' | 'type'>,
) => {
  return <input type="file" className={styles.fileInput} {...props} />;
};

export default FileInput;
