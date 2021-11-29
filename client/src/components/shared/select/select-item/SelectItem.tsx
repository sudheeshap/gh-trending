import React, { FC, ReactNode, useContext } from 'react';

import { SelectContext } from 'context/Select.context';
import styles from './SelectItem.module.scss';

export interface SelectItemProps {
  value: string;
  children: ReactNode;
}

const SelectItem: FC<SelectItemProps> = ({ value, children }) => {
  const { setValue, setText, setOpen } = useContext(SelectContext);

  const handleClick = () => {
    setValue(value);
    setText(String(children));
    setOpen(false);
  };

  return (
    <div className={styles.container} onClick={() => handleClick()}>
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export default SelectItem;
