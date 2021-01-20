import * as React from 'react';
import { render, fireEvent, screen } from 'tests/app-test-utils';
import '@testing-library/jest-dom/extend-expect';

import { Button } from './Button';
import { colors } from '../../../theme/colors';

describe('<Button />', () => {
  const text = 'Click here';

  it('renders', () => {
    render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  describe('variant primary', () => {
    it('renders', () => {
      const onClick = jest.fn();
      render(
        <Button variant="primary" onClick={onClick}>
          {text}
        </Button>
      );

      expect(screen.getByText(text)).toBeInTheDocument();
      expect(screen.queryByTestId('button-loader')).toBeNull();
      expect(screen.queryByTestId('svg-icon')).toBeNull();
    });

    it('renders with onClick', () => {
      const onClick = jest.fn();
      render(
        <Button variant="primary" onClick={onClick}>
          {text}
        </Button>
      );

      fireEvent.click(screen.getByTestId('button'));
      expect(onClick).toHaveBeenCalled();
    });

    it('renders with type', () => {
      const type = 'submit';
      render(
        <Button variant="primary" type={type}>
          {text}
        </Button>
      );

      expect(screen.getByTestId('button')).toHaveAttribute('type', type);
    });

    it('renders with tabIndex', () => {
      const tabIndex = -1;
      render(
        <Button variant="primary" tabIndex={tabIndex}>
          {text}
        </Button>
      );

      expect(screen.getByTestId('button')).toHaveAttribute(
        'tabIndex',
        `${tabIndex}`
      );
    });

    it('renders with icon', () => {
      render(
        <Button variant="primary" icon="IconChevronRight" iconColor="cloud">
          {text}
        </Button>
      );

      expect(screen.getByTestId('icon-chevron-right')).toBeInTheDocument();
    });
  });

  describe('variant outline', () => {
    it('renders', () => {
      render(<Button variant="outline">{text}</Button>);

      expect(screen.getByText(text)).toBeInTheDocument();
      expect(screen.queryByTestId('button-loader')).toBeNull();
      expect(screen.queryByTestId('svg-icon')).toBeNull();
    });

    it('renders with onClick', () => {
      const onClick = jest.fn();
      render(
        <Button variant="outline" onClick={onClick}>
          {text}
        </Button>
      );

      fireEvent.click(screen.getByTestId('button'));
      expect(onClick).toHaveBeenCalled();
    });
  });
});
