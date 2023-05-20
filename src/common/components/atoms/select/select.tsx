import { ComponentProps, forwardRef } from 'react';

import styles from './select.module.css';

const Select = forwardRef<
  HTMLSelectElement,
  Omit<ComponentProps<'select'>, 'className'>
>(({ children, ...rest }, ref) => {
  return (
    <select ref={ref} className={styles.select} {...rest}>
      {children}
    </select>
  );
});

export default Select;
