/**
 *
 * PosterCard
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { Card, Heading } from 'evergreen-ui';

import { Poster } from './types';

interface Props {
  poster: Poster;
}
export const PosterCard = memo((props: Props) => {
  const { posterPath, name, id } = props.poster;

  return (
    <PosterContainer>
      <PosterLink to={`/movie/${id}`}>
        <PosterImg src={posterPath} alt={name}></PosterImg>
        <PosterName color={'inherit'}>{name}</PosterName>
      </PosterLink>
    </PosterContainer>
  );
});

const PosterImg = styled.img`
  height: 90%;
  width: 100%;
  border-radius: inherit;
`;

const PosterLink = styled(Link)`
  text-decoration: none;
  color: #234361;
  border-radius: inherit;
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

const PosterName = styled(Heading)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  padding 2.5%;
`;

const PosterContainer = styled(Card)`
  background-color: white;
  margin: 0 1rem;
  width: 9rem;
  height: 100%;
  flex-shrink: 0;
`;
