import React, { FC } from 'react';

import { RepositoryInterface } from '../interfaces/repository.interface';

interface RepositoriesProps {
  repositories: RepositoryInterface[];
}

const Repositories: FC<RepositoriesProps> = ({ repositories }) => {
  if (repositories?.length === 0) {
    return null;
  }

  return (
    <>
      {repositories.map((repository) => (
        <article key={`${repository.username}/${repository.repositoryName}`}>
          {repository.username}/{repository.repositoryName}
        </article>
      ))}
    </>
  );
};

export default Repositories;
