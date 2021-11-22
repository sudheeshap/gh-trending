import React, { FC, MouseEventHandler, ReactNode } from 'react';

import { Icon } from 'components/icon/Icon';
import styles from './Button.module.scss';

export interface ButtonProps {
  children?: ReactNode;
  icon?: string;
  className?: string;
  testId?: string;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, icon, isDisabled, className, testId, onClick }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      disabled={isDisabled}
      data-testid={testId}
      onClick={onClick}
    >
      {icon && <Icon name={icon} className={styles.icon} width={16} height={16} />}
      {children}
    </button>
  );
};

export default Button;
