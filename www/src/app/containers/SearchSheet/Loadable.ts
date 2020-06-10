/**
 *
 * Asynchronously loads the component for SearchSheet
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SearchSheet = lazyLoad(
  () => import('./index'),
  module => module.SearchSheet,
);
