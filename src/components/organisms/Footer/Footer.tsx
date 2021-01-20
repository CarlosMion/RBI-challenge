import React from 'react';
import styled from 'styled-components';

import { Text } from 'components/atoms/Text';
import { Button } from 'components/molecules/Button';

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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 36px 24px;
  width: 100%;
  z-index: 5;

  @media only screen and (min-width: 481px) {
    padding: 36px 48px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const SpacedRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CheckoutButton = styled(Button)`
  margin-top: 8px;
`;
