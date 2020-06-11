/**
 *
 * PosterList
 *
 */
import React, { Component, memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { Pane, Card, Pill } from 'evergreen-ui';

import { PosterCard } from '../PosterCard';

import { MovieDetails } from 'commonTypes/movies';

const LOADING_POSTERS = 18;

interface Props {
  posters: MovieDetails[];
  overflow?: boolean;
  loading?: boolean;
}

export const PosterList = memo((props: Props) => {
  const { posters, loading, overflow } = props;

  const { t } = useTranslation('PosterList');

  return (
    <ListPane overflow={overflow && 'auto'}>
      {loading
        ? [...Array(LOADING_POSTERS)].map(() => <PosterCard loading />)
        : posters.length
        ? posters.map(poster => (
            <PosterCard
              key={poster.id}
              posterID={poster.id}
              posterPath={poster.poster_path}
              name={poster.title}
            />
          ))
        : null}
      <ListCapPill text={posters.length ? t('endList') : t('emptyList')} />
    </ListPane>
  );
});

const ListCapPill = props => {
  return (
    <Card margin="auto" height="auto" width="auto" flexShrink={0}>
      <Pill margin={8}>{props.text || ''}</Pill>
    </Card>
  );
};

const ListPane = styled(Pane)`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 1rem;
  background-color: #f9f9fb;
  border: 1px solid #edf0f2;
`;
// const ListOverflowPane = styled(ListPane)`
//   overflow: auto;
// `;
