import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'tests/app-test-utils';

import { ItemsGrid } from './ItemsGrid';

describe('<ItemsGrid />', () => {
  it('renders ', () => {
    render(<ItemsGrid />);

    expect(screen.getByTestId('items-grid')).toBeInTheDocument();
  });
});
