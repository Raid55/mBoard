/**
 *
 * Paginator
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { IconButton, Paragraph } from 'evergreen-ui';

interface Props {}
// totalPages: number;
// showPages: number;
// selec;

export function Paginator(props: Props) {
  return (
    <Div>
      <IconButton icon="chevron-left" marginX={4} />
      <Paragraph>Page 1 of 10</Paragraph>
      <IconButton icon="chevron-right" marginX={4} />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
