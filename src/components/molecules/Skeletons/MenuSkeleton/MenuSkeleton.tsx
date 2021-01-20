import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { ThemeContext } from 'styled-components';

export default function MenuSkeleton() {
  const theme = useContext(ThemeContext);

  return (
    <ContentLoader
      width="100%"
      height={120}
      viewBox="0 0 1416 120"
      backgroundColor={theme.colors.skeletonBackground}
      foregroundColor={theme.colors.skeletonForeground}
    >
      <rect x="184" y="20" width="84" height="84" rx="4" />
      <rect x="348" y="20" width="84" height="84" rx="4" />
      <rect x="512" y="20" width="84" height="84" rx="4" />
      <rect x="676" y="20" width="84" height="84" rx="4" />
      <rect x="840" y="20" width="84" height="84" rx="4" />
      <rect x="1004" y="20" width="84" height="84" rx="4" />
      <rect x="1168" y="20" width="84" height="84" rx="4" />
      <rect x="1332" y="20" width="84" height="84" rx="4" />
    </ContentLoader>
  );
}
