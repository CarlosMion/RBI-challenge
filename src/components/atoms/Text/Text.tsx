import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Colors } from '../../../../types';

type Props = {
  children: ReactNode;

  /**
   * Defina esta propriedade para mudar a cor do texto
   * @default "primary"
   */
  color?: keyof Colors;
};

export function Text({ children }: Props) {
  return <>{children}</>;
}

const Common = css<Props>`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.small}px;
  letter-spacing: 0.25px;
`;

const UpperCaseSmall = styled.p<Props>`
  ${Common};
  font-family: ${(props) => props.theme.fonts.insaniBurguer};
  font-size: ${(props) => props.theme.fontSizes.small}px;
  text-transform: uppercase;
`;

const UpperCaseMedium = styled.p<Props>`
  ${Common};
  font-family: ${(props) => props.theme.fonts.insaniBurguer};
  font-size: ${(props) => props.theme.fontSizes.medium}px;
  line-height: ${(props) => props.theme.lineHeights.medium}px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const UpperCaseBoldLarge = styled.p<Props>`
  ${Common};
  font-family: ${(props) => props.theme.fonts.insaniBurguer};
  font-size: ${(props) => props.theme.fontSizes.large}px;
  line-height: ${(props) => props.theme.lineHeights.large}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;

const UpperCaseBoldXLarge = styled.p<Props>`
  ${Common};
  font-family: ${(props) => props.theme.fonts.insaniBurguer};
  font-size: ${(props) => props.theme.fontSizes.xLarge}px;
  line-height: ${(props) => props.theme.lineHeights.xLarge}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;

Text.UpperCaseSmall = UpperCaseSmall;
Text.UpperCaseMedium = UpperCaseMedium;
Text.UpperCaseBoldLarge = UpperCaseBoldLarge;
Text.UpperCaseBoldXLarge = UpperCaseBoldXLarge;