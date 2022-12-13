import { ButtonVariant, Colors, IconsType } from '../../../../types';

export type Ref = HTMLButtonElement;

export type ButtonProps = {
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
  variant?: ButtonVariant;
  width?: string;
  tabIndex?: number;
};

export type Props = ButtonProps & {
  children: any;
  icon?: IconsType;
  iconColor?: keyof Colors;
};
