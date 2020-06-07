/**
 *
 * Asynchronously loads the component for MovieSideSheet
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MovieSideSheet = lazyLoad(
  () => import('./index'),
  module => module.MovieSideSheet,
);
