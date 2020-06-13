/**
 *
 * PosterImg
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Spinner } from 'evergreen-ui';
import { BaseProps } from '../types';
import { ENDPOINT_PRE } from 'commonTypes/api';

interface Props extends BaseProps {
  posterPath?: string;
  name?: string;
}

export function PosterImg(props: Props) {
  const { posterPath, name, loading } = props;
  const [backupImg, showBackupImg] = useState(false);
  // lol, done very quickly
  const NO_IMAGE =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

  return loading ? (
    <HeaderLoading />
  ) : (
    <Img
      src={
        posterPath && !backupImg
          ? `${ENDPOINT_PRE.api}${ENDPOINT_PRE.posters}${posterPath}`
          : NO_IMAGE
      }
      alt={name}
      onError={() => showBackupImg(true)}
    />
  );
}
const HeaderLoading = () => {
  return <Spinner alignSelf="center" height={400} />;
};

const Img = styled.img`
  width: 100%;
  height: auto;
  margin: auto 0;
  border-radius: inherit;
  align-self: end;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff;
`;
