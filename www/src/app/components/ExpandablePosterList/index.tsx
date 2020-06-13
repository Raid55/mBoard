/**
 *
 * ExpandablePosterList
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

import { Pane, Heading, ChevronRightIcon } from 'evergreen-ui';
import { Paginator } from '../Paginator';

import { PosterList } from '../PosterList';
import { BaseProps } from '../types';
import { MovieDetails } from 'commonTypes/movies';

interface Props extends BaseProps {
  posters: MovieDetails[];
  tabName?: string;
  tabColor?: string;
  overflow?: boolean;
}

export function ExpandablePosterList(props: Props) {
  const { tabColor, tabName, posters, overflow, loading } = props;
  const defaultColor = '#DDEBF7';

  return (
    <ListContainer>
      {tabName && (
        <ListHeader>
          <ListTab color={tabColor || defaultColor}>
            <TabText>{tabName}</TabText>
            <ChevronRightIcon marginY="auto" size={25} />
          </ListTab>
          <Paginator />
        </ListHeader>
      )}
      <PosterList posters={posters} loading={loading} overflow={overflow} />
    </ListContainer>
  );
}

const ListContainer = styled(Pane)`
  display: flex;
  flex-direction: column;
  width: 100%%;
  height: auto;
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
