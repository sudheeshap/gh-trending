import React, { FC } from 'react';

import { DeveloperInterface } from '../../interfaces/developer.interface';
import Developer from '../developer/Developer';

interface DeveloperListProps {
  developers: DeveloperInterface[];
}

const DeveloperList: FC<DeveloperListProps> = ({ developers }) => {
  if (developers?.length === 0) {
    return null;
  }

  return (
    <>
      {developers.map((developer) => (
        <Developer key={developer.rank} developer={developer} />
      ))}
    </>
  );
};

export default DeveloperList;
