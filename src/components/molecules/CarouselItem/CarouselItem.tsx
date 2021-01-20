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
    <LinkContainer to={section!._id} isSectionSelected={isSelectedSection}>
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

const LinkContainer = styled(Link)<{ isSectionSelected: boolean }>`
  padding: 4px 0px 12px;
  cursor: default;
`;

const Container = styled.div<{ isSectionSelected: boolean }>`
  display: flex;
  padding: 8px 8px;
  flex-direction: column;
  width: 176px;
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
`;

const Image = styled.img`
  display: flex;
  width: 64px;
  height: 64px;
  border-radius: 6px;
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
`;
