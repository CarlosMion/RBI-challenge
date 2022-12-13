import { ReactNode } from 'react';
import { Colors } from '../../../../types';

export type TextProps = {
  children: ReactNode;
  color?: keyof Colors;
};
