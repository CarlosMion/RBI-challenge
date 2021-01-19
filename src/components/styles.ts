import { css } from 'styled-components';
import { Colors } from '../../types';

export const Scrollbar = css<{ trackBackgroundColor?: keyof Colors }>`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  scrollbar-width: thin;
  scrollbar-color: var(--thumb-bg) var(--track-bg);
  &::-webkit-scrollbar-track {
    background-color: ${({ theme, trackBackgroundColor }) =>
      trackBackgroundColor
        ? theme.colors[trackBackgroundColor]
        : 'var(--track-bg)'};
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--thumb-bg);
    border-radius: 6px;
  }
`;

export const ScrollbarAutoHide = css`
  overflow: hidden;
  &:hover {
    overflow: auto;
    overflow: overlay;
  }

  @-moz-document url-prefix() {
    padding: 6px;

    &:hover {
      padding-right: 0;
      overflow: scroll;
    }
  }
`;
