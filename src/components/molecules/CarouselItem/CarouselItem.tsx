import React from 'react';
import styled from 'styled-components';

import { SectionItemType } from '../../../../types';
import { Text } from 'components/atoms/Text';
import { Link, useParams } from 'react-router-dom';

type Props = {
  section?: SectionItemType;
};

export function CarouselItem({ section }: Props) {
  const { selectedSection } = useParams<{ selectedSection: string }>();

  const isSelectedSection = selectedSection === section?._id;

  return (
    <LinkContainer to={section!._id}>
      <Container isSectionSelected={isSelectedSection}>
        <Image
          src={
            process.env.PUBLIC_URL +
            `/images/${section?.carouselImage.asset._ref}`
          }
          alt={section?.name.en || ''}
        />
        <Title>{section?.name.en}</Title>
      </Container>
    </LinkContainer>
  );
}

const LinkContainer = styled(Link)`
  padding: 4px 0px 12px;
  cursor: default;
`;

const Container = styled.div<{ isSectionSelected: boolean }>`
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

const Image = styled.img`
  display: flex;
  width: 32px;
  height: 32px;

  @media only screen and (min-width: 481px) {
    width: 64px;
    height: 64px;
  }
`;

const Title = styled(Text.UpperCaseBoldLarge)`
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
