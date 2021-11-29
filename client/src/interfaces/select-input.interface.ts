import { OptionInterface } from './option.interface';

export interface SelectInputInterface {
  label: string;
  key: string;
  header: string;
  options: OptionInterface[];
}
