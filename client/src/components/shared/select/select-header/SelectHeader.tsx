import React, { FC, ReactNode } from 'react';

import styles from './SelectHeader.module.scss';

export interface SelectHeaderProps {
  children: ReactNode;
}

const SelectHeader: FC<SelectHeaderProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default SelectHeader;
