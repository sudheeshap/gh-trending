import React, { FC } from 'react';

import Repository from '../repository/Repository';
import styles from './RepositoryList.module.scss';
import { RepositoryInterface } from 'interfaces/repository.interface';

interface RepositoryListProps {
  repositories?: RepositoryInterface[];
  isPlaceholder?: boolean;
}

const repositoriesCount = 25;

const RepositoryList: FC<RepositoryListProps> = ({ repositories, isPlaceholder }) => {
  if (isPlaceholder) {
    return (
      <div className={styles.container}>
        {[...Array(repositoriesCount)].map((repository, i) => (
          <Repository key={i} isPlaceholder repository={repository} />
        ))}
      </div>
    );
  }

  if (!repositories || repositories.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {repositories.map((repository) => (
        <Repository
          key={`${repository.username}/${repository.repositoryName}`}
          repository={repository}
          isPlaceholder={isPlaceholder}
        />
      ))}
    </div>
  );
};

export default RepositoryList;
