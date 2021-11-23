import React, { FC } from 'react';

import Button from 'components/shared/button/Button';
import styles from './ToggleButtonGroup.module.scss';

export interface ToggleButtonGroupProps {
  options: Array<{
    value: string;
    text: string;
  }>;
  selected: string;
  onClick: (v: string) => void;
}

const ToggleButtonGroup: FC<ToggleButtonGroupProps> = ({ options, selected, onClick }) => {
  return (
    <nav className={styles.container}>
      {options.map((option) => (
        <Button
          onClick={() => onClick(option.value)}
          key={option.value}
          className={`${option.value === selected ? styles.selected : ''} ${styles.button}`}
          testId="toggle-button"
        >
          {option.text}
        </Button>
      ))}
    </nav>
  );
};

export default ToggleButtonGroup;
