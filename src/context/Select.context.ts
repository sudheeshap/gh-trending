import { createContext } from 'react';

const defaultValue = {
  value: '',
  text: '',
  isOpen: false,
  setOpen: (open: boolean) => {},
  setValue: (value: string) => {},
  setText: (text: string) => {},
};

export const SelectContext = createContext(defaultValue);
