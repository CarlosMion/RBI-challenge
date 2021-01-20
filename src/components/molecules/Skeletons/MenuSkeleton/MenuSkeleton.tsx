import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import styled, { ThemeContext } from 'styled-components';

export default function MenuSkeleton() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <PhoneLoader
        data-testid="menu-skeleton"
        width="100%"
        height={90}
        viewBox="0 0 480 90"
        backgroundColor={theme.colors.skeletonBackground}
        foregroundColor={theme.colors.skeletonForeground}
      >
        <rect x="72" y="4" width="84" height="84" rx="4" />
        <rect x="272" y="4" width="84" height="84" rx="4" />
        <rect x="472" y="4" width="84" height="84" rx="4" />
      </PhoneLoader>
      <RestLoader
        data-testid="menu-skeleton"
        width="100%"
        height={122}
        viewBox="0 0 1348 122"
        backgroundColor={theme.colors.skeletonBackground}
        foregroundColor={theme.colors.skeletonForeground}
      >
        <rect x="64" y="16" width="84" height="84" rx="4" />
        <rect x="264" y="16" width="84" height="84" rx="4" />
        <rect x="464" y="16" width="84" height="84" rx="4" />
        <rect x="664" y="16" width="84" height="84" rx="4" />
        <rect x="864" y="16" width="84" height="84" rx="4" />
        <rect x="1064" y="16" width="84" height="84" rx="4" />
        <rect x="1240" y="16" width="84" height="84" rx="4" />
      </RestLoader>
    </>
  );
}

const PhoneLoader = styled(ContentLoader)`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`;

const RestLoader = styled(ContentLoader)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
