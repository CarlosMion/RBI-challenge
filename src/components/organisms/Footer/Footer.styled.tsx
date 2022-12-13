import { Button } from 'components/molecules/Button';
import styled from 'styled-components';

export const Container = styled.div`
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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SpacedRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CheckoutButton = styled(Button)`
  margin-top: 8px;
`;
