import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  DesktopLoader,
  PhoneLoader,
  TabletLoader,
} from './GridSkeleton.styled';

export default function GridSkeleton() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <PhoneLoader
        data-testid="grid-skeleton"
        width="100%"
        height="100%"
        viewBox="0 0 480 800"
        backgroundColor={theme.colors.silverDark}
        foregroundColor={theme.colors.cloud}
      >
        <rect x="32" y="24" rx="4" width="196" height="240" />
        <rect x="252" y="24" rx="4" width="196" height="240" />
        <rect x="32" y="288" rx="4" width="196" height="240" />
        <rect x="252" y="288" rx="4" width="196" height="240" />
      </PhoneLoader>
      <TabletLoader
        data-testid="grid-skeleton"
        width="100%"
        height="100%"
        viewBox="0 0 2000 1600"
        backgroundColor={theme.colors.silverDark}
        foregroundColor={theme.colors.cloud}
      >
        <rect x="120" y="24" rx="4" width="520" height="720" />;
        <rect x="760" y="24" rx="4" width="520" height="720" />
        <rect x="1400" y="24" rx="4" width="520" height="720" />
        <rect x="120" y="840" rx="4" width="520" height="720" />;
        <rect x="760" y="840" rx="4" width="520" height="720" />
        <rect x="1400" y="840" rx="4" width="520" height="720" />
      </TabletLoader>
      <DesktopLoader
        data-testid="grid-skeleton"
        width="100%"
        height="100%"
        viewBox="0 0 2000 1600"
        backgroundColor={theme.colors.silverDark}
        foregroundColor={theme.colors.cloud}
      >
        <rect x="156" y="2" rx="4" width="520" height="632" />;
        <rect x="740" y="2" rx="4" width="520" height="632" />;
        <rect x="1328" y="2" rx="4" width="520" height="632" />;
        <rect x="156" y="706" rx="4" width="520" height="632" />;
        <rect x="740" y="706" rx="4" width="520" height="632" />;
        <rect x="1328" y="706" rx="4" width="520" height="632" />;
      </DesktopLoader>
    </>
  );
}
