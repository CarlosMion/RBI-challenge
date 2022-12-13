import { ReactNode } from 'react';
import { Colors } from '../../../../../types';

export type SvgIconProps = {
  children: ReactNode;
  color?: keyof Colors;
  size?: string;
  titleAccess?: string;
  viewBox?: string;
  fixedHeight?: boolean;
};
