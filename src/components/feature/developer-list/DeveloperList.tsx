import React, { FC } from 'react';

import Developer from '../developer/Developer';
import { DeveloperInterface } from 'interfaces/developer.interface';
import styles from './DeveloperList.module.scss';

interface DeveloperListProps {
  developers?: DeveloperInterface[];
  isPlaceholder?: boolean;
}

const developersCount = 25;

const DeveloperList: FC<DeveloperListProps> = ({ developers, isPlaceholder }) => {
  if (isPlaceholder) {
    return (
      <div className={styles.container}>
        {[...Array(developersCount)].map((developer, i) => (
          <Developer key={i} isPlaceholder developer={developer} />
        ))}
      </div>
    );
  }

  if (!developers || developers.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {developers.map((developer) => (
        <Developer key={developer.rank} developer={developer} isPlaceholder={isPlaceholder} />
      ))}
    </div>
  );
};

export default DeveloperList;
