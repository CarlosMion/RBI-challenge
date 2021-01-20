import '@testing-library/jest-dom/extend-expect';
import { queryCache } from 'react-query';
import 'jest-styled-components';

// https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0
// See BREAKING CHANGES - Option 3
import MutationObserver from '@sheerun/mutationobserver-shim';

window.MutationObserver = MutationObserver;

// general cleanup
afterEach(async () => {
  queryCache.clear();
});
