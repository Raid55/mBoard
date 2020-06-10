/**
 *
 * PosterList
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { Pane, Card, Pill } from 'evergreen-ui';

import { PosterCard } from '../PosterCard';
import { Poster } from '../PosterCard/types';

interface Props {
  posters: Poster[];
}

export const PosterList = memo((props: Props) => {
  const { posters } = props;

  return (
    <ListPane background="tint1">
      {posters.map(poster => (
        <PosterCard key={poster.id} poster={poster} />
      ))}
      <EndListPill />
    </ListPane>
  );
});

const EndListPill = () => {
  return (
    <Card margin="auto" height="auto" width="auto" flexShrink={0}>
      <Pill margin={8}>End of Lists</Pill>
    </Card>
  );
};

const ListPane = styled(Pane)`
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: auto;
  padding: 1rem;
`;
const ListOverflowPane = styled(Pane)`
  display: flex;
  flex-direction: row;
  flex: 1;

  padding: 1rem;
`;
