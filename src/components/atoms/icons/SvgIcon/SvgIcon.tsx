import { Svg } from './SvgIcon.styled';
import { SvgIconProps } from './types';

export function SvgIcon({
  children,
  color,
  size = '24px',
  titleAccess,
  viewBox = '0 0 24 24',
  fixedHeight = false,
  ...rest
}: SvgIconProps) {
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
