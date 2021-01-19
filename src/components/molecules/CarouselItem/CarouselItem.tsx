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
    <LinkContainer to={section!._id} isSelected={isSelectedSection}>
      <Container isSelected={isSelectedSection}>
        <Image
          src={process.env.PUBLIC_URL + `/images/${section?.image.asset._ref}`}
          alt={section?.name.en || ''}
        />
        <Title>{section?.name.en}</Title>
      </Container>
    </LinkContainer>
  );
}

const LinkContainer = styled(Link)<{ isSelected: boolean }>`
  text-decoration: none;
  background-color: ${({ isSelected, theme }) =>
    isSelected
      ? `${theme.colors.silverDarkHover}`
      : `${theme.colors.silverDark}`};
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.silverDarkHover};
  }
`;

const Container = styled.div<{ isSelected: boolean }>`
  display: flex;
  padding: 16px 8px;
  flex-direction: column;
  width: 160px;
  align-items: center;

  transform: ${({ isSelected }) => (isSelected ? 'scale(0.95)' : 'none')};
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
