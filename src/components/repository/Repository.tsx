import React, { FC, useState } from 'react';

import Avatar from 'components/avatar/Avatar';
import { Icon } from 'components/icon/Icon';
import { getDefaultRepository } from 'utils/trending';
import { RepositoryInterface } from '../../interfaces/repository.interface';
import styles from './Repository.module.scss';
import Button from 'components/button/Button';

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
    <>
      <article className={`${isPlaceholder ? styles.placeholder : ''} ${styles.container}`}>
        <h2 className={styles.title}>
          <Icon name="repo" className={styles.titleIcon} width={16} height={16} />
          <a href={repository.url} className={styles.titleLink}>
            <>
              {repository.username}
              {!isPlaceholder && '/'}
              <span>{repository.repositoryName}</span>
            </>
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

            {repository.totalStars && (
              <a href={`${repository.url}/stargazers`} className={styles.iconLink}>
                <Icon name="star" width={16} height={16} className={styles.icon} />
                {repository.totalStars}
              </a>
            )}

            {repository.forks && (
              <a
                href={`${repository.url}/network/members.${repository.username}`}
                className={styles.iconLink}
              >
                <Icon name="fork" width={16} height={16} className={styles.icon} />
                {repository.forks}
              </a>
            )}

            {repository.builtBy && (
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
    </>
  );
};

export default Repository;
