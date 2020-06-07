import React from 'react';
import styled from 'styled-components/macro';

import { Pane } from 'evergreen-ui';

interface Props {
  children?: React.ReactNode;
}

export function Header(props: Props) {
  return <GradientPane>{props.children}</GradientPane>;
}

// alternate gradients
// background-image: linear-gradient(
//   67.6deg,
//   rgba(225, 242, 254, 1) -2.8%,
//   rgba(193, 224, 250, 1) 44.6%,
//   rgba(19, 116, 197, 1) 102.4%
// );
// background-image: linear-gradient(
//   111.1deg,
//   rgba(0, 40, 70, 1) -4.8%,
//   rgba(255, 115, 115, 1) 82.7%,
//   rgba(255, 175, 123, 1) 97.2%
// );
const GradientPane = styled(Pane)`
  background-image: linear-gradient(
    110.3deg,
    rgba(72, 85, 99, 1) 8.8%,
    rgba(127, 146, 166, 1) 95.1%
  );
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
