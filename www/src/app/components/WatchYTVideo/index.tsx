/**
 *
 * WatchVideo
 *
 */
import React, { useState } from 'react';
import YouTube from 'react-youtube';

import { Dialog, Button } from 'evergreen-ui';
import { VideoDetails } from 'commontypes/movies';

interface Props {
  video?: VideoDetails;
}

export function WatchYTVideo(props: Props) {
  const { video } = props;
  const [closed, setClosed] = useState(true);

  // hard coded... not optimal
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
        <YouTube videoId={(video || {}).key} opts={opts} />
      </Dialog>
      <Button
        textAlign="center"
        marginX="auto"
        marginY="1%"
        width="100%"
        iconBefore="video"
        intent="danger"
        onClick={() => setClosed(false)}
        disable={video ? false : true}
      >
        Trailer
      </Button>
    </>
  );
}
