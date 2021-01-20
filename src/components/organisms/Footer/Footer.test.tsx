import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'tests/app-test-utils';

import { Footer } from './Footer';

describe('<Footer />', () => {
  it('renders ', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
