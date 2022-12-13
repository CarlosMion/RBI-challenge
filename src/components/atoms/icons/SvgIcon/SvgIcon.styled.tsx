import styled from 'styled-components';
import { SvgIconProps } from './types';

export const Svg = styled.svg<SvgIconProps>`
  width: ${({ fixedHeight }) => (fixedHeight ? undefined : '1em')};
  height: 1em;
  display: block;
  flex-shrink: 0;
  font-size: ${({ size }) => size};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.white};
  pointer-events: none;
`;
