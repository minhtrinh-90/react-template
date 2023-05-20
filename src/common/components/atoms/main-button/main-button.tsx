import { ComponentProps, forwardRef } from 'react';

import styles from './main-button.module.css';

const MainButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<'button'>, 'className'>
>(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} className={styles.button} {...rest}>
      {children}
    </button>
  );
});

export default MainButton;
