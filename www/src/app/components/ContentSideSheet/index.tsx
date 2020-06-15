/**
 *
 * ContentSideSheet
 *
 */
import React from 'react';
// import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';

import { SideSheet } from 'evergreen-ui';

import { Header as SheetHeader } from './Header';
import { TabBar as SheetTabBar } from './TabBar';

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

export function ContentSideSheet(props: Props) {
  const { onClose } = props;

  // const { t, i18n } = useTranslation();

  return (
    <SideSheet
      isShown={true}
      onCloseComplete={onClose}
      containerProps={{
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
      }}
      preventBodyScrolling
    >
      {props.children}
    </SideSheet>
  );
}
export { SheetHeader, SheetTabBar };

// const Div = styled.div``;
