import React, { FC, memo, useState } from 'react';

import { DeveloperInterface } from 'interfaces/developer.interface';
import styles from './Developer.module.scss';
import { getDefaultDeveloper } from 'utils/trending';
import Button from 'components/shared/button/Button';
import Avatar from 'components/shared/avatar/Avatar';
import { Icon } from 'components/shared/icon/Icon';

interface DeveloperProps {
  developer?: DeveloperInterface;
  isPlaceholder?: boolean;
}

const defaultDeveloper = getDefaultDeveloper();

const Developer: FC<DeveloperProps> = ({ developer = defaultDeveloper, isPlaceholder }) => {
  const [isFollowed, setFollowed] = useState<boolean>(false);

  const handleClickFollow = () => {
    setFollowed((isFollowed) => !isFollowed);
  };

  return (
    <article className={`${isPlaceholder ? styles.placeholder : ''} ${styles.container}`}>
      <div className={styles.rank}>{developer.rank}</div>

      <div className={styles.developerContainer}>
        <Avatar imgUrl={developer.avatar} size="medium" />
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            <a href={developer.url} className={styles.titleLink}>
              {developer.name}
            </a>
          </h2>
          <p className={styles.username}>{developer.username}</p>
        </div>
      </div>

      <Button className={styles.followButton} onClick={handleClickFollow}>
        {isFollowed && 'Unfollow'}
        {!isFollowed && 'Follow'}
      </Button>

      {developer.popularRepository?.repositoryName && (
        <div className={styles.popularRepoContainer}>
          <div className={styles.repoHeader}>
            <Icon name="trend" className={styles.repoIcon} />
            <span>POPULAR REPO</span>
          </div>
          <h2 className={styles.title}>
            <Icon name="repo" className={styles.titleIcon} width={16} height={16} />
            <a href={developer.popularRepository.url} className={styles.repoTitleLink}>
              {developer.popularRepository.repositoryName}
            </a>
          </h2>
          <p className={styles.decription}>{developer.popularRepository.description}</p>
        </div>
      )}
    </article>
  );
};

export default memo(Developer);
