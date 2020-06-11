/**
 *
 * PosterCard
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { Card, Heading, Spinner } from 'evergreen-ui';

import { EndpointPrefix } from 'commonTypes/api';
const { api, movie, posters } = EndpointPrefix;

interface Props {
  posterPath?: string;
  name?: string;
  posterID?: number;
  loading?: boolean;
}

// lol, done very quickly
const NO_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

export const PosterCard = memo((props: Props) => {
  const { posterPath, name, posterID, loading } = props;

  return loading ? (
    <PosterLoading />
  ) : posterPath && name && posterID ? (
    <PosterLink to={`${movie}/${posterID}`}>
      <PosterContent posterPath={posterPath} name={name} />
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

const PosterContent = (props: Omit<Props, 'posterID'>) => {
  const { posterPath, name } = props;

  return (
    <PosterContainer>
      <PosterImg
        src={posterPath ? `${api}${posters}${posterPath}` : NO_IMAGE}
        alt={name}
      ></PosterImg>
      <PosterName color="inherit">{name}</PosterName>
    </PosterContainer>
  );
};

const PosterImg = styled.img`
  width: 100%;
  margin: auto auto;
  border-radius: inherit;
  align-self: end;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff;
`;

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
  flex-shrink: 0;
  box-shadow: 17px 17px 34px #ccd1cb, -17px -17px 34px #ffffff;
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
