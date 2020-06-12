/**
 *
 * Asynchronously loads the component for HomePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CrewSheet = lazyLoad(
  () => import('./CrewSheet'),
  module => module.CrewSheet,
);
export const CastSheet = lazyLoad(
  () => import('./CastSheet'),
  module => module.CastSheet,
);
export const InfoSheet = lazyLoad(
  () => import('./InfoSheet'),
  module => module.InfoSheet,
);
export const SimilarSheet = lazyLoad(
  () => import('./SimilarSheet'),
  module => module.SimilarSheet,
);
