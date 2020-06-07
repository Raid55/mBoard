import React from 'react';
import styled from 'styled-components/macro';

import { Heading, Pane, Paragraph, Badge } from 'evergreen-ui';
import { SheetHeader } from '../../components/ContentSideSheet';
import { WatchYTVideo } from '../../components/WatchYTVideo';

interface Props {
  posterPath: string;
  ytVideo: string;
  year: number;
  runtime: number;
  certification: string; // replace with enum
  genre: number[]; //replace with enum
  title: string;
}

export function MovieSheetHeader(props: Props) {
  const {
    title,
    ytVideo,
    posterPath,
    year,
    runtime,
    certification,
    genre,
  } = props;
  return (
    <SheetHeader>
      <PosterDiv>
        <PosterImg src={posterPath} alt={title} />
        <WatchYTVideo video={ytVideo} />
      </PosterDiv>
      <HeaderMetaDiv>
        <MetaBadgesPane>
          <Badge color="neutral" isSolid marginRight={8}>
            Rated
          </Badge>
          <Badge color="green" isSolid marginRight={8}>
            {certification}
          </Badge>
        </MetaBadgesPane>
        <MetaBadgesPane>
          <Badge color="neutral" isSolid marginRight={8}>
            Runtime
          </Badge>
          <Badge color="orange" isSolid marginRight={8}>
            {runtime} Min.
          </Badge>
        </MetaBadgesPane>
        <MetaBadgesPane>
          <Badge color="neutral" isSolid marginRight={8}>
            Genre
          </Badge>
          <Badge color="red" isSolid marginRight={8}>
            Action
          </Badge>
          <Badge color="green" isSolid marginRight={8}>
            Sci-Fi
          </Badge>
        </MetaBadgesPane>
        <TitlePane>
          <Heading size={600}>{title}</Heading>
          <Paragraph size={400} color="muted">
            {year}
          </Paragraph>
        </TitlePane>
      </HeaderMetaDiv>
    </SheetHeader>
  );
}
const HeaderMetaDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitlePane = styled(Pane)`
  background-color: white;
  margin: 0.4rem 0.6rem;
  border-radius: 5px;
  padding: 0.3rem;
  min-width: 12rem;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3);
`;

const MetaBadgesPane = styled(Pane)`
  margin: 0 0.6rem;
`;

const PosterDiv = styled.div`
  border-radius: 5px;
  height: 15rem;
  max-height: 15rem;
  width: 9rem;
  min-width: 9rem;
  padding: 3px;
  margin: 0.4rem 0.6rem;
  background-color: white;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3);
`;
const PosterImg = styled.img`
  height: 85%;
  width: 100%;
  margin-bottom: 3px;
  border-radius: 5px;
`;
