/**
 *
 * ExpandablePosterList
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

import { Pane, Heading, ChevronRightIcon } from 'evergreen-ui';

import { PosterList } from '../PosterList';
import { MovieDetails } from 'commonTypes/movies';

interface Props {
  posters: MovieDetails[];
  tabName: string;
  tabColor?: string;
  headerChild?: React.ReactNode;
}

interface Props {
  posters: MovieDetails[];
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
      <PosterList posters={posters} />
    </ListContainer>
  );
}

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
