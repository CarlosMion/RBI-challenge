import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'tests/app-test-utils';

import { CarouselMenu } from './CarouselMenu';

describe('<CarouselMenu />', () => {
  it('renders ', () => {
    render(<CarouselMenu />);

    expect(screen.getByTestId('carousel-menu')).toBeInTheDocument();
  });
});
