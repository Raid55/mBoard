/**
 *
 * WatchVideo
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Dialog, Button } from 'evergreen-ui';
import YouTube from 'react-youtube';

interface Props {
  video?: string;
}

export function WatchYTVideo(props: Props) {
  const { video } = props;
  const [closed, setClosed] = useState(true);

  const opts = {
    height: '390',
    width: '640',
  };

  return (
    <>
      <Dialog
        isShown={!closed}
        onCloseComplete={() => setClosed(true)}
        preventBodyScrolling
        width="auto"
        hasFooter={false}
      >
        <YouTube videoId={video} opts={opts} />
      </Dialog>
      <Button
        textAlign="center"
        marginX="auto"
        width="100%"
        iconBefore="play"
        onClick={() => setClosed(false)}
        disable={video ? false : true}
      >
        Trailer
      </Button>
    </>
  );
}

const Div = styled.div``;
