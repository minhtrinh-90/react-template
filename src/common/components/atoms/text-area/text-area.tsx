import { ComponentProps, forwardRef } from 'react';

import styles from './text-area.module.css';

const TextArea = forwardRef<
  HTMLTextAreaElement,
  Omit<ComponentProps<'textarea'>, 'className'>
>(({ children, ...rest }, ref) => {
  return (
    <textarea ref={ref} className={styles.textarea} {...rest}>
      {children}
    </textarea>
  );
});

export default TextArea;
