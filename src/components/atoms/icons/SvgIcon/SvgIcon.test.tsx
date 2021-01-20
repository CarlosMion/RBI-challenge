import * as React from 'react';
import { render, screen } from 'tests/app-test-utils';
import '@testing-library/jest-dom/extend-expect';

import { SvgIcon } from './SvgIcon';

describe('<SvgIcon />', () => {
  it('renders', () => {
    render(
      <SvgIcon>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2943 11.288V5H12.7056V11.288H19V12.6979H12.7056V19H11.2943V12.6979H5V11.288H11.2943Z"
          fill="currentColor"
        />
      </SvgIcon>
    );

    expect(screen.queryByTestId('svg-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('svg-icon-title')).toBeNull();
  });

  it('renders with color and size', () => {
    const color = 'primary';
    const size = '48px';
    render(
      <SvgIcon size={size} color={color}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2943 11.288V5H12.7056V11.288H19V12.6979H12.7056V19H11.2943V12.6979H5V11.288H11.2943Z"
          fill="currentColor"
        />
      </SvgIcon>
    );

    expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
    expect(screen.getByTestId('svg-icon')).toHaveAttribute('color', color);
  });

  it('renders with titleAccess', () => {
    const titleAccess = 'Title';
    render(
      <SvgIcon titleAccess={titleAccess}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2943 11.288V5H12.7056V11.288H19V12.6979H12.7056V19H11.2943V12.6979H5V11.288H11.2943Z"
          fill="currentColor"
        />
      </SvgIcon>
    );

    expect(screen.getByText(titleAccess)).toBeInTheDocument();
  });

  it('renders with viewBox', () => {
    const viewBox = '0 0 48 48';
    render(
      <SvgIcon viewBox={viewBox}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2943 11.288V5H12.7056V11.288H19V12.6979H12.7056V19H11.2943V12.6979H5V11.288H11.2943Z"
          fill="currentColor"
        />
      </SvgIcon>
    );

    expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
    expect(screen.getByTestId('svg-icon')).toHaveAttribute('viewBox', viewBox);
  });
});
