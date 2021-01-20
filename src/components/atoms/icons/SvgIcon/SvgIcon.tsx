import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../../types';

type Props = {
  children: ReactNode;

  /**
   * Sets SVG color
   * @default "white"
   */
  color?: keyof Colors;

  /**
   * Change SVG font size
   * @default "24px"
   */
  size?: string;

  /**
   * Sets SVG title
   */
  titleAccess?: string;

  /**
   * Sets SVG viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;

  /**
   * Set if should fix proportion by height
   * @default "false"
   */
  fixedHeight?: boolean;
};

export function SvgIcon({
  children,
  color,
  size = '24px',
  titleAccess,
  viewBox = '0 0 24 24',
  fixedHeight,
  ...rest
}: Props) {
  return (
    <Svg
      color={color}
      size={size}
      viewBox={viewBox}
      fixedHeight={fixedHeight}
      focusable="false"
      aria-hidden={titleAccess ? undefined : 'true'}
      role={titleAccess ? 'img' : 'presentation'}
      xmlns="http://www.w3.org/2000/svg"
      data-testid="svg-icon"
      fill="none"
      {...rest}
    >
      {children}
      {titleAccess ? (
        <title data-testid="svg-icon-title">{titleAccess}</title>
      ) : null}
    </Svg>
  );
}

const Svg = styled.svg<Props>`
  width: ${({ fixedHeight }) => (fixedHeight ? undefined : '1em')};
  height: 1em;
  display: block;
  flex-shrink: 0;
  font-size: ${({ size }) => size};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.white};
  pointer-events: none;
`;
