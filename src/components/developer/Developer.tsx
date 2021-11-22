import React, { FC } from 'react';

import { DeveloperInterface } from '../../interfaces/developer.interface';

interface DeveloperProps {
  developer: DeveloperInterface;
}

const Developer: FC<DeveloperProps> = ({ developer }) => {
  if (!developer) {
    return null;
  }

  return (
    <>
      <article>{developer.name}</article>
    </>
  );
};

export default Developer;
