import { ComponentProps } from 'react';

import styles from './subtitle.module.css';

const Subtitle = ({
  children,
  ...rest
}: Omit<ComponentProps<'h2'>, 'className'>) => {
  return (
    <h2 className={styles.subtitle} {...rest}>
      {children}
    </h2>
  );
};

export default Subtitle;
