import { ComponentProps } from 'react';

import styles from './title.module.css';

const Title = ({
  children,
  ...rest
}: Omit<ComponentProps<'h1'>, 'className'>) => {
  return (
    <h1 className={styles.title} {...rest}>
      {children}
    </h1>
  );
};

export default Title;
