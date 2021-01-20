import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'tests/app-test-utils';

import { items } from 'tests/factories/items';

import { ItemCard } from './ItemCard';

describe('<ItemCard />', () => {
  it('renders ', () => {
    render(<ItemCard item={items[0]} />);

    expect(screen.getByTestId('item-card')).toBeInTheDocument();
  });
});
