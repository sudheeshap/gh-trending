import React, { FC } from 'react';

import styles from './Header.module.scss';

export interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header: FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <div className={styles.container} data-testid="app-header">
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  );
};

export default Header;
