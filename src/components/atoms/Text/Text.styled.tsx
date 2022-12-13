import styled, { css } from 'styled-components';
import { TextProps } from './types';

export const Common = css<TextProps>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.small}px;
  letter-spacing: 0.25px;
`;

export const SigmarUpperCaseXSmall = styled.p<TextProps>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.xSmall}px;
  text-transform: uppercase;
`;

export const SigmarUpperCaseSmall = styled.p<TextProps>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.small}px;
  text-transform: uppercase;
`;

export const SigmarUpperCaseMedium = styled.p<TextProps>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.medium}px;
  line-height: ${(props) => props.theme.lineHeights.medium}px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const SigmarUpperCaseLarge = styled.p<TextProps>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.large}px;
  line-height: ${(props) => props.theme.lineHeights.large}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;

export const SigmarUpperCaseXLarge = styled.p<TextProps>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.sigmarOne};
  font-size: ${(props) => props.theme.fontSizes.xLarge}px;
  line-height: ${(props) => props.theme.lineHeights.xLarge}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;

export const NunitoUpperCaseMedium = styled.p<TextProps>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-size: ${(props) => props.theme.fontSizes.medium}px;
  line-height: ${(props) => props.theme.lineHeights.medium}px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const NunitoUpperCaseSmall = styled.p<TextProps>`
  ${Common};
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-size: ${(props) => props.theme.fontSizes.small}px;
  line-height: ${(props) => props.theme.lineHeights.small}px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
