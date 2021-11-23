import { FC } from 'react';

export interface IconProps {
  name: string;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, color, width = 20, height = 20, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      className={className}
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
};
