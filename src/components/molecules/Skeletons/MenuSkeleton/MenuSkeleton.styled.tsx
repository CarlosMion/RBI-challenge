import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

export const PhoneLoader = styled(ContentLoader)`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`;

export const RestLoader = styled(ContentLoader)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
