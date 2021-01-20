import React, { forwardRef, ElementType } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import * as Icons from 'components/atoms/icons';
import { Text } from 'components/atoms/Text';

import { IconsType, Colors, ButtonVariant } from '../../../../types';

type Ref = HTMLButtonElement;

type ButtonProps = {
  /**
   * Disables the button, changing the visual style making it unable to be pressed
   * @default false
   */
  disabled?: boolean;

  /** Function to handle button click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * The type of the button
   * @default button
   */
  type?: 'submit' | 'button';

  /**
   * Set this to change the button variant
   */
  variant?: ButtonVariant;

  /**
   * Set the width of the button
   * @default 'auto'
   */
  width?: string;

  /**
   * Sets the tabIndex of the button
   */
  tabIndex?: number;
};

type Props = ButtonProps & {
  children: any;

  /**
   * Set the icon at the end of the button
   */
  icon?: IconsType;

  /**
   * Set the color of the icon at the end of the button
   */
  iconColor?: keyof Colors;
};

function getLabelVariant(variant?: ButtonVariant) {
  switch (variant) {
    case 'primary':
      return PrimaryLabel;
    case 'outline':
      return OutlineLabel;
    default:
      return PrimaryLabel;
  }
}

export const Button = forwardRef<Ref, Props>(function Button(
  {
    children,
    disabled = false,
    icon,
    iconColor,
    onClick,
    tabIndex,
    type = 'button',
    variant = 'primary',
    width = 'auto',
    ...rest
  },
  ref
) {
  const Icon = Icons[icon || 'IconChevronRight'];
  const Label = getLabelVariant(variant);
  const labelColor = variant === 'outline' ? 'primaryDark' : 'white';

  return (
    <ButtonStyled
      disabled={disabled}
      onClick={onClick}
      type={type}
      variant={variant}
      width={width}
      tabIndex={tabIndex}
      data-testid="button"
      ref={ref}
      {...rest}
    >
      {variant ? (
        <>
          <Label color={labelColor}>{children}</Label>
          {icon && (
            <IconContainer>
              <Icon color={iconColor} />
            </IconContainer>
          )}
        </>
      ) : (
        children
      )}
    </ButtonStyled>
  );
});

const Primary = css`
  background-color: ${({ theme }) => theme.colors.mustard};
  border-radius: 4px;
  height: 40px;
  padding: 0 34px;
`;

const Outline = css`
  border: 2px solid ${({ theme }) => rgba(theme.colors.shadow, 0.4)};
  height: 32px;

  p {
    max-width: 146px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const ButtonStyled = styled.button<ButtonProps>`
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

const CommonLabel = css`
  transition: ${({ theme }) => `color ${theme.animation.normal} ease`};
`;

const PrimaryLabel = styled(Text.UpperCaseMedium)<Props>`
  ${CommonLabel};
`;

const OutlineLabel = styled(Text.UpperCaseMedium)<Props>`
  ${CommonLabel};
`;

const IconContainer = styled.div`
  margin-left: 8px;
  margin-right: -12px;
`;
