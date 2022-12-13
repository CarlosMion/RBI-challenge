import styled from 'styled-components';
import { Scrollbar, ScrollbarAutoHide } from 'components/styles';

export const Container = styled.div`
  padding-top: 116px;
  background-color: ${({ theme }) => theme.colors.cloud};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Scrollbar}
  ${ScrollbarAutoHide}

  @media only screen and (min-width: 481px) {
    padding-top: 156px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  padding: 36px 16px;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media only screen and (min-width: 481px) {
    padding: 36px 32px;
  }

  @media only screen and (min-width: 1025px) {
    padding: 36px 108px;
  }
`;
