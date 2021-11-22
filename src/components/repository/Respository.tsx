import React, { FC } from 'react';

import { RepositoryInterface } from '../../interfaces/repository.interface';

interface RepositoryProps {
  repository: RepositoryInterface;
}

const Repository: FC<RepositoryProps> = ({ repository }) => {
  if (!repository) {
    return null;
  }

  return (
    <>
      <article>
        {repository.username}/{repository.repositoryName}
      </article>
    </>
  );
};

export default Repository;
