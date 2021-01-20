import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'tests/app-test-utils';

import { IconChevronRight } from './IconChevronRight';

describe('<IconChevronRight />', () => {
  it('renders', () => {
    render(<IconChevronRight />);

    expect(screen.getByTestId('icon-chevron-right')).toBeInTheDocument();
  });

  it('renders with color and size', () => {
    const color = 'silverDark';
    const size = '48px';
    render(<IconChevronRight color={color} size={size} />);

    expect(screen.getByTestId('icon-chevron-right')).toBeInTheDocument();
    expect(screen.getByTestId('icon-chevron-right')).toHaveAttribute(
      'color',
      color
    );
  });
});
