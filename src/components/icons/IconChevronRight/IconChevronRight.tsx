import React from 'react';
import { SvgIcon } from '../SvgIcon';

import { Colors } from '../../../../types';

type Props = {
  /**
   * Tamanho do ícone
   * @default "24px"
   */
  size?: string;

  /**
   * Altera a cor do ícone
   * @default "white"
   */
  color?: keyof Colors;
};

export function IconChevronRight({ size, color }: Props) {
  return (
    <SvgIcon size={size} color={color}>
      <path
        d="M10.7055 6.70538C10.3159 6.31581 9.68428 6.31581 9.2947 6.70538V6.70538C8.90543 7.09466 8.90509 7.72569 9.29393 8.11538L13.1701 12L9.29393 15.8846C8.90509 16.2743 8.90543 16.9053 9.2947 17.2946V17.2946C9.68428 17.6842 10.3159 17.6842 10.7055 17.2946L16.0001 12L10.7055 6.70538Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
