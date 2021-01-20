import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'tests/app-test-utils';

import { BKLogo } from './BKLogo';

describe('<BKLogo />', () => {
  it('renders ', () => {
    render(<BKLogo />);

    expect(screen.getByText('Menu')).toBeInTheDocument();
  });
});
