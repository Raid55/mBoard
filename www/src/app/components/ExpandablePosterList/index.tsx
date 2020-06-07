/**
 *
 * ExpandablePosterList
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

import {
  Pane,
  Card,
  Heading,
  Pill,
  ChevronRightIcon,
  // TagInput,
} from 'evergreen-ui';

import { PosterCard } from '../PosterCard';
import { Poster } from '../PosterCard/types';

interface Props {
  posters: Poster[];
  tabName: string;
  tabColor?: string;
  headerChild?: React.ReactNode;
}

export function ExpandablePosterList(props: Props) {
  const { tabColor, tabName, posters, headerChild } = props;
  const defaultColor = '#DDEBF7';

  return (
    <ListContainer>
      <ListHeader>
        <ListTab color={tabColor || defaultColor}>
          <TabText>{tabName}</TabText>
          <ChevronRightIcon marginY="auto" size={25} />
        </ListTab>
        {headerChild}
      </ListHeader>
      <PosterList background="tint1">
        {posters.map((poster, index) => (
          <PosterCard key={poster.id} poster={poster} />
        ))}
        <EndListPill />
      </PosterList>
    </ListContainer>
  );
}

const EndListPill = () => {
  return (
    <Card margin="auto" height="auto" width="auto" flexShrink={0}>
      <Pill margin={8}>End of Lists</Pill>
    </Card>
  );
};
const ListContainer = styled(Pane)`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: auto;
  margin: 0.5rem auto;
`;

const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListTab = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.color};
  width: fit-content;
  border-radius: 5px 5px 0 0;
  margin-left: 8px;
`;

const TabText = styled(Heading)`
  white-space: nowrap;
  text-align: center;
  margin: auto 0;
`;

const PosterList = styled(Pane)`
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: auto;
  padding: 1rem;
`;
