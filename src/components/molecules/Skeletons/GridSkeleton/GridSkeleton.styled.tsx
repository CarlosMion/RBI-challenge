import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

export const PhoneLoader = styled(ContentLoader)`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`;

export const TabletLoader = styled(ContentLoader)`
  @media only screen and (max-width: 480px) {
    display: none;
  }

  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;

export const DesktopLoader = styled(ContentLoader)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
