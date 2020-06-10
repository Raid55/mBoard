/**
 *
 * Paginator
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Button, IconButton } from 'evergreen-ui';

interface Props {}
// totalPages: number;
// showPages: number;
// selec;

export function Paginator(props: Props) {
  return (
    <Div>
      <IconButton />
      <Button borderRadius={0}>1</Button>
      <Button borderRadius={0}>2</Button>
      <Button borderRadius={0}>3</Button>
      <Button borderRadius={0}>4</Button>
      <Button borderRadius={0}>5</Button>
      <IconButton />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;
