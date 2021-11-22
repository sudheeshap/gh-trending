import React, { FC } from 'react';

import { DeveloperInterface } from '../interfaces/developer.interface';

interface DevelopersProps {
  developers: DeveloperInterface[];
}

const Developers: FC<DevelopersProps> = ({ developers }) => {
  if (developers?.length === 0) {
    return null;
  }

  return (
    <>
      {developers.map((developer) => (
        <article key={`${developer.rank}`}>{developer.name}</article>
      ))}
    </>
  );
};

export default Developers;
