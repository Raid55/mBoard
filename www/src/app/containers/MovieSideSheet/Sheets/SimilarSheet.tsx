import React from 'react';
import styled from 'styled-components/macro';

import { Spinner, Pane } from 'evergreen-ui';
import { PosterList } from '../../../components/PosterList';
import { PagedMovieList } from 'commontypes/movies';

interface Props {
  similar?: PagedMovieList;
  loading?: boolean;
}

export function SimilarSheet(props: Props) {
  const { similar, loading } = props;
  return (
    <Pane flex="1" background="tint1" padding={16} overflow="auto">
      {loading ? (
        <Spinner alignSelf="center" marginX="auto" height={400} />
      ) : (
        <PosterList posters={similar?.results || []} />
      )}
    </Pane>
  );
}

const Wrapper = styled.div``;
