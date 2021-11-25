import React, { FC, memo, useState } from 'react';

import Avatar from 'components/shared/avatar/Avatar';
import { Icon } from 'components/shared/icon/Icon';
import { getDefaultRepository } from 'utils/trending';
import styles from './Repository.module.scss';
import Button from 'components/shared/button/Button';
import { RepositoryInterface } from 'interfaces/repository.interface';

interface RepositoryProps {
  repository?: RepositoryInterface;
  isPlaceholder?: boolean;
}

const defaultRepository = getDefaultRepository();

const textStarInfo: Record<string, string> = {
  daily: '{} stars today',
  weekly: '{} stars this week',
  monthly: '{} stars this month',
};

const Repository: FC<RepositoryProps> = ({ repository = defaultRepository, isPlaceholder }) => {
  const [isStarActive, setStarActive] = useState<boolean>(false);

  const textRating = textStarInfo[repository.since]?.replace('{}', String(repository.starsSince));

  const renderContributors = () => {
    return repository.builtBy.map((user) => (
      <a href={user.url} title={user.username} key={user.username}>
        <Avatar imgUrl={user.avatar} altText={user.username} />
      </a>
    ));
  };

  const handleClickStar = () => {
    setStarActive((isStarActive) => !isStarActive);
  };

  return (
    <article
      className={`${isPlaceholder ? styles.placeholder : ''} ${styles.container}`}
      data-testid="repository"
    >
      <h2 className={styles.title}>
        <Icon name="repo" className={styles.titleIcon} width={16} height={16} />
        <a href={repository.url} className={styles.titleLink}>
          {repository.username}
          {!isPlaceholder && '/'}
          <span>{repository.repositoryName}</span>
        </a>
      </h2>

      <Button
        icon={`${isStarActive ? 'unstar' : 'star'}`}
        className={styles.starButton}
        onClick={handleClickStar}
      >
        {isStarActive && 'Unstar'}
        {!isStarActive && 'Star'}
      </Button>

      <p className={styles.description}>{repository.description}</p>

      <div className={styles.infoContainer}>
        <div className={styles.infoLeft}>
          {repository.language && <span>{repository.language}</span>}

          {(repository.totalStars || isPlaceholder) && (
            <a href={`${repository.url}/stargazers`} className={styles.iconLink}>
              <Icon name="star" width={16} height={16} className={styles.icon} />
              {repository.totalStars}
            </a>
          )}

          {(repository.forks || isPlaceholder) && (
            <a
              href={`${repository.url}/network/members.${repository.username}`}
              className={styles.iconLink}
            >
              <Icon name="fork" width={16} height={16} className={styles.icon} />
              {repository.forks}
            </a>
          )}

          {repository.builtBy && repository.builtBy.length > 0 && (
            <span>
              Built by
              {renderContributors()}
            </span>
          )}
        </div>

        <div className={styles.infoRight}>
          <Icon name="star" width={16} height={16} className={styles.icon} />
          <span>{textRating}</span>
        </div>
      </div>
    </article>
  );
};

export default memo(Repository);
