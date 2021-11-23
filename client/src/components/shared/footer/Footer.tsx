import React, { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.copyright}>© 2021 GitHub, Inc.</span>
    </div>
  );
};

export default Footer;
