import { ComponentProps, forwardRef } from 'react';

import styles from './error-message.module.css';

const ErrorMessage = forwardRef<
  HTMLParagraphElement,
  Omit<ComponentProps<'p'>, 'className'>
>(({ children, ...rest }, ref) => {
  return (
    <p ref={ref} className={styles.error} {...rest}>
      {children}
    </p>
  );
});

export default ErrorMessage;
