import React, { FC } from 'react';

import { RepositoryInterface } from '../../interfaces/repository.interface';
import Repository from '../repository/Respository';

interface RepositoryListProps {
  repositories: RepositoryInterface[];
}

const RepositoryList: FC<RepositoryListProps> = ({ repositories }) => {
  if (repositories?.length === 0) {
    return null;
  }

  return (
    <>
      {repositories.map((repository) => (
        <Repository
          key={`${repository.username}/${repository.repositoryName}`}
          repository={repository}
        />
      ))}
    </>
  );
};

export default RepositoryList;
