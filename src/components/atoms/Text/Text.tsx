import {
  NunitoUpperCaseMedium,
  NunitoUpperCaseSmall,
  SigmarUpperCaseLarge,
  SigmarUpperCaseMedium,
  SigmarUpperCaseSmall,
  SigmarUpperCaseXLarge,
  SigmarUpperCaseXSmall,
} from './Text.styled';
import { TextProps } from './types';

export function Text({ children }: TextProps) {
  return <>{children}</>;
}

Text.SigmarUpperCaseXSmall = SigmarUpperCaseXSmall;
Text.SigmarUpperCaseSmall = SigmarUpperCaseSmall;
Text.SigmarUpperCaseMedium = SigmarUpperCaseMedium;
Text.SigmarUpperCaseLarge = SigmarUpperCaseLarge;
Text.SigmarUpperCaseXLarge = SigmarUpperCaseXLarge;
Text.NunitoUpperCaseSmall = NunitoUpperCaseSmall;
Text.NunitoUpperCaseMedium = NunitoUpperCaseMedium;
