import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { Text } from 'components/atoms/Text';
import { ButtonProps, Props } from './types';

export const Primary = css`
  background-color: ${({ theme }) => theme.colors.mustard};
  height: 40px;
`;

export const Outline = css`
  border: 2px solid ${({ theme }) => rgba(theme.colors.shadow, 0.4)};
  height: 32px;

  p {
    max-width: 146px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ButtonStyled = styled.button<ButtonProps>`
  background: none;
  border: none;
  padding: 16px 12px;
  margin: 0;
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: ${({ width }) => width};
  transition: ${({ theme }) =>
    `border-color ${theme.animation.normal} ease, background-color ${theme.animation.normal} ease, `};
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  border-radius: 24px;

  ${({ tabIndex }) =>
    `${tabIndex}` === '-1'
      ? css`
          cursor: auto;
          pointer-events: none;
        `
      : ''}

  ${({ variant }) => variant === 'primary' && Primary};
  ${({ variant }) => variant === 'outline' && Outline};
`;

export const CommonLabel = css`
  transition: ${({ theme }) => `color ${theme.animation.normal} ease`};
`;

export const PrimaryLabel = styled(Text.SigmarUpperCaseMedium)<Props>`
  ${CommonLabel};
`;

export const OutlineLabel = styled(Text.SigmarUpperCaseMedium)<Props>`
  ${CommonLabel};
`;

export const IconContainer = styled.div`
  margin-left: 8px;
  margin-right: -12px;
`;
