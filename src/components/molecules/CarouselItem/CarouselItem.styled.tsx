import styled from 'styled-components';
import { Text } from 'components/atoms/Text';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  padding: 4px 0px 12px;
  cursor: default;
`;

export const Container = styled.div<{ isSectionSelected: boolean }>`
  display: flex;
  padding: 8px 4px;
  flex-direction: column;
  width: 120px;
  align-items: center;
  background-color: ${({ isSectionSelected, theme }) =>
    isSectionSelected
      ? `${theme.colors.silverDarkHover}`
      : `${theme.colors.silverDark}`};
  &:hover {
    background-color: ${({ theme }) => theme.colors.silverDarkHover};
  }
  transform: ${({ isSectionSelected }) =>
    isSectionSelected ? 'scale(0.95)' : 'none'};
  border-radius: 8px;

  @media only screen and (min-width: 481px) {
    width: 186px;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 32px;
  height: 32px;

  @media only screen and (min-width: 481px) {
    width: 64px;
    height: 64px;
  }
`;

export const Title = styled(Text.SigmarUpperCaseLarge)`
  text-align: center;
  margin: 8px 0 0;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: visible;
  overflow: visible;
  font-size: ${({ theme }) => theme.fontSizes.xSmall}px;

  @media only screen and (min-width: 481px) {
    font-size: ${({ theme }) => theme.fontSizes.large}px;
  }
`;
