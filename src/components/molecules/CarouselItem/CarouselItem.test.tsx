import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'tests/app-test-utils';

import { sections } from 'tests/factories/sections';

import { CarouselItem } from './CarouselItem';

describe('<CarouselItem />', () => {
  it('renders ', () => {
    render(<CarouselItem section={sections[0]} />);

    expect(screen.getByTestId('carousel-item')).toBeInTheDocument();
  });
});
