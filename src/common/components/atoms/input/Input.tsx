import { ComponentProps, forwardRef } from 'react';

import styles from './input.module.css';

const Input = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<'input'>, 'className'>
>(({ children, ...rest }, ref) => {
  return (
    <input ref={ref} className={styles.input} {...rest}>
      {children}
    </input>
  );
});

export default Input;
