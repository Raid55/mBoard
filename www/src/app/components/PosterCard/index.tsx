/**
 *
 * PosterCard
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { Card, Heading, Spinner } from 'evergreen-ui';
import { PosterImg } from '../PosterImg';

import { MovieDetails } from 'commonTypes/movies';
import { ENDPOINT_PRE } from 'commonTypes/api';
const { movie } = ENDPOINT_PRE;

interface Props {
  poster?: MovieDetails;
  loading?: boolean;
}

export const PosterCard = memo((props: Props) => {
  const { poster, loading } = props;

  return loading ? (
    <PosterLoading />
  ) : poster ? (
    <PosterLink to={`${movie}/${poster?.id}`}>
      <PosterContent posterPath={poster?.poster_path} name={poster?.title} />
    </PosterLink>
  ) : null;
});

const PosterLoading = () => {
  return (
    <PosterContainer paddingY="2.5%">
      <Spinner alignSelf="center" marginY="100%" />
    </PosterContainer>
  );
};

interface PosterContentProps {
  posterPath: string;
  name: string;
}
const PosterContent = (props: PosterContentProps) => {
  return (
    <PosterContainer>
      <PosterImg {...props}></PosterImg>
      <PosterName color="inherit">{props.name}</PosterName>
    </PosterContainer>
  );
};

const PosterName = styled(Heading)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  padding 2.5%;
`;

const PosterContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  margin: 0 1rem;
  width: 9rem;
  min-height: 100%;
  padding 5% 3% 0;
  box-shadow: 17px 17px 34px #ccd1cb, -17px -17px 34px #ffffff;
`;

const PosterLink = styled(Link)`
  text-decoration: none;
  color: #234361;
  border-radius: inherit;
  margin: 1rem 0;
  &:hover {
    color: #084b8a;
  }

  &:visited {
    color: #37248f;
  }

  &:active {
    color: #1070ca;
  }
`;
