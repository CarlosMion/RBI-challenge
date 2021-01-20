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
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.small}px;
  letter-spacing: 0.25px;
`;

const SigmarUpperCaseXSmall = styled.p<Props>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.xSmall}px;
  text-transform: uppercase;
`;

const SigmarUpperCaseSmall = styled.p<Props>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.small}px;
  text-transform: uppercase;
`;

const SigmarUpperCaseMedium = styled.p<Props>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.medium}px;
  line-height: ${(props) => props.theme.lineHeights.medium}px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const SigmarUpperCaseLarge = styled.p<Props>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.large}px;
  line-height: ${(props) => props.theme.lineHeights.large}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;

const SigmarUpperCaseXLarge = styled.p<Props>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.xLarge}px;
  line-height: ${(props) => props.theme.lineHeights.xLarge}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;

const NunitoUpperCaseMedium = styled.p<Props>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-size: ${(props) => props.theme.fontSizes.medium}px;
  line-height: ${(props) => props.theme.lineHeights.medium}px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const NunitoUpperCaseSmall = styled.p<Props>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-size: ${(props) => props.theme.fontSizes.small}px;
  line-height: ${(props) => props.theme.lineHeights.small}px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

Text.SigmarUpperCaseXSmall = SigmarUpperCaseXSmall;
Text.SigmarUpperCaseSmall = SigmarUpperCaseSmall;
Text.SigmarUpperCaseMedium = SigmarUpperCaseMedium;
Text.SigmarUpperCaseLarge = SigmarUpperCaseLarge;
Text.SigmarUpperCaseXLarge = SigmarUpperCaseXLarge;
Text.NunitoUpperCaseSmall = NunitoUpperCaseSmall;
Text.NunitoUpperCaseMedium = NunitoUpperCaseMedium;
