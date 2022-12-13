import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'tests/app-test-utils';

import MainTemplate from './MainTemplate';

describe('<Text />', () => {
  const text = 'text example';

  it('renders children', () => {
    render(<MainTemplate>{text}</MainTemplate>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
