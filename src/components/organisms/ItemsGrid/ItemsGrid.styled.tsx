import styled from 'styled-components';

export const ItemsContainer = styled.div`
  grid-template-columns: repeat(auto-fill, 164px);
  grid-template-rows: repeat(auto-fill, 220px);
  display: grid;
  align-items: center;
  width: 100%;
  justify-content: center;
  grid-gap: 16px;
  grid-auto-rows: auto;

  @media only screen and (min-width: 481px) {
    grid-template-columns: repeat(auto-fill, 220px);
    grid-template-rows: repeat(auto-fill, 280px);
    grid-gap: 24px;
  }

  @media only screen and (min-width: 1025px) {
    grid-template-columns: repeat(auto-fill, 348px);
    grid-template-rows: repeat(auto-fill, 428px);
    grid-gap: 48px;
  }
`;
