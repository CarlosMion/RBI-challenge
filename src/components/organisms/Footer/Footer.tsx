import { Text } from 'components/atoms/Text';
import { CheckoutButton, Column, Container, SpacedRow } from './Footer.styled';

export function Footer() {
  return (
    <Container data-testid="footer">
      <Column>
        <Text.NunitoUpperCaseMedium color="white">
          {'See tips & tricks'}
        </Text.NunitoUpperCaseMedium>
        <Text.SigmarUpperCaseMedium color="white">
          need help?
        </Text.SigmarUpperCaseMedium>
      </Column>
      <Column>
        <SpacedRow>
          <Text.NunitoUpperCaseSmall color="white">
            Total (0 Item):
          </Text.NunitoUpperCaseSmall>
          <Text.SigmarUpperCaseXLarge color="white">
            $0.00
          </Text.SigmarUpperCaseXLarge>
        </SpacedRow>
        <CheckoutButton width="160px" icon="IconChevronRight">
          Checkout
        </CheckoutButton>
      </Column>
    </Container>
  );
}
