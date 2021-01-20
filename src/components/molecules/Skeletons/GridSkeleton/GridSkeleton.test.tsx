import React from 'react';
import { render, screen } from 'tests/app-test-utils';
import '@testing-library/jest-dom/extend-expect';

import GridSkeleton from './GridSkeleton';

describe('<GridSkeleton />', () => {
  it('renders', () => {
    render(<GridSkeleton />);

    expect(screen.getAllByTestId('grid-skeleton')[0]).toBeInTheDocument();
  });
});
