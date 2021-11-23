import React, { useState, FC, useRef, ReactNode } from 'react';

import SelectItem, { SelectItemProps } from 'components/shared/select-item/SelectItem';
import SelectHeader, { SelectHeaderProps } from 'components/shared/select-header/SelectHeader';
import styles from './Select.module.scss';
import { SelectContext } from 'context/Select.context';
import useClickOutside from 'hooks/useClickOutside';

export interface SelectProps {
  children: ReactNode;
  label: string;
  testId?: string;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> & { Header: FC<SelectHeaderProps>; Item: FC<SelectItemProps> } = ({
  children,
  label,
  testId,
  onChange,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [value, setSelectionValue] = useState<string>('');
  const [text, setSelectionText] = useState<string>('Any');

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setOpen(false);
  };

  const handleOpen = (open: boolean) => {
    setOpen(open);
  };

  const handleSetValue = (value: string) => {
    setSelectionValue(value);
    onChange(value);
  };

  const handleSetText = (text: string) => {
    setSelectionText(text);
  };

  useClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref} className={styles.container} data-testid={testId}>
      <span>{label}</span>
      <button className={styles.header} onClick={() => setOpen((isOpen) => !isOpen)}>
        {text}
        &#9660;
      </button>
      <div ref={ref} className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <SelectContext.Provider
          value={{
            isOpen,
            value,
            text,
            setOpen: handleOpen,
            setValue: handleSetValue,
            setText: handleSetText,
          }}
        >
          {children}
        </SelectContext.Provider>
      </div>
    </div>
  );
};

Select.Header = SelectHeader;
Select.Item = SelectItem;

export default Select;
