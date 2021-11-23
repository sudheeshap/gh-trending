import React, { FC } from 'react';

import styles from './Avatar.module.scss';

export interface AvatarProps {
  imgUrl: string;
  altText?: string;
  size?: 'small' | 'medium';
}

const Avatar: FC<AvatarProps> = ({ imgUrl, size = 'small', altText }) => {
  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      <img src={imgUrl} alt={altText} className={styles.avatarImage} data-testid="avatar-image" />
    </div>
  );
};

export default Avatar;
