/**
 *
 * ExpandablePosterList
 *
 */
import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

import { Pane, Heading, ChevronRightIcon } from 'evergreen-ui';
import { Paginator } from '../Paginator';

import { PosterList } from '../PosterList';
import { BaseProps } from '../types';
import { MovieDetails } from 'commonTypes/movies';

interface Props extends BaseProps {
  posters: MovieDetails[];
  name?: string;
  tabColor?: string;
  overflow?: boolean;
  onLoad?: (any) => any;
  children?: React.ReactNode;
}

export function ExpandablePosterList(props: Props) {
  const {
    tabColor,
    name,
    posters,
    overflow,
    loading,
    children,
    onLoad,
  } = props;
  const defaultColor = '#DDEBF7';

  useEffect(() => {
    if (onLoad) onLoad(name);
  }, []);

  return (
    <ListContainer>
      {name && (
        <ListHeader>
          <ListTab color={tabColor || defaultColor}>
            <TabText>{name}</TabText>
            <ChevronRightIcon marginY="auto" size={25} />
          </ListTab>
          {children}
        </ListHeader>
      )}
      <PosterList posters={posters} overflow={overflow} loading={loading} />
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
