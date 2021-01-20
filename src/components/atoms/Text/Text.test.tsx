import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'tests/app-test-utils';

import { Text } from './Text';
import { colors } from '../../../theme/colors';

describe('<Text />', () => {
  const text = 'text example';

  it('renders ', () => {
    render(<Text.SigmarUpperCaseMedium>{text}</Text.SigmarUpperCaseMedium>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders only text', () => {
    render(<Text>{text}</Text>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders ', () => {
    render(
      <Text.SigmarUpperCaseMedium color="cloud">
        {text}
      </Text.SigmarUpperCaseMedium>
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders SigmarUpperCaseXSmall', () => {
    render(<Text.SigmarUpperCaseXSmall>{text}</Text.SigmarUpperCaseXSmall>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders SigmarUpperCaseSmall', () => {
    render(<Text.SigmarUpperCaseSmall>{text}</Text.SigmarUpperCaseSmall>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders SigmarUpperCaseLarge', () => {
    render(<Text.SigmarUpperCaseLarge>{text}</Text.SigmarUpperCaseLarge>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders SigmarUpperCaseXLarge', () => {
    render(<Text.SigmarUpperCaseXLarge>{text}</Text.SigmarUpperCaseXLarge>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders NunitoUpperCaseSmall', () => {
    render(<Text.NunitoUpperCaseSmall>{text}</Text.NunitoUpperCaseSmall>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders NunitoUpperCaseMedium', () => {
    render(<Text.NunitoUpperCaseMedium>{text}</Text.NunitoUpperCaseMedium>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
