import styled from 'styled-components';
import { Text } from 'components/atoms/Text';

export const Container = styled.div`
  display: flex;
  padding: 16px 12px 0;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.silverDark};
`;

export const Image = styled.img`
  display: flex;
  width: 70px;
  height: 42px;
  border-radius: 6px;

  @media only screen and (min-width: 481px) {
    width: 102px;
    height: 64px;
  }
`;

export const Title = styled(Text.SigmarUpperCaseLarge)`
  text-align: center;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: visible;
  overflow: visible;
`;

export const Marker = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 4000px;
  height: 4px;
  width: 64px;
`;
