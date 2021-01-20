import React from 'react';
import { render, screen } from 'tests/app-test-utils';
import '@testing-library/jest-dom/extend-expect';

import MenuSkeleton from './MenuSkeleton';

describe('<MenuSkeleton />', () => {
  it('renders', () => {
    render(<MenuSkeleton />);

    expect(screen.getAllByTestId('menu-skeleton')[0]).toBeInTheDocument();
  });
});
