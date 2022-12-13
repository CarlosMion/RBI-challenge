import { forwardRef } from 'react';

import * as Icons from 'components/atoms/icons';

import { ButtonVariant } from '../../../../types';
import {
  ButtonStyled,
  IconContainer,
  OutlineLabel,
  PrimaryLabel,
} from './Button.styled';
import { Props, Ref } from './types';

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
