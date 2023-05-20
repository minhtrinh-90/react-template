import { ComponentProps, forwardRef } from 'react';

import styles from './label.module.css';

const Label = forwardRef<
  HTMLLabelElement,
  Omit<ComponentProps<'label'>, 'className'>
>(({ children, ...rest }, ref) => {
  return (
    <label ref={ref} className={styles.label} {...rest}>
      {children}
    </label>
  );
});

export default Label;
