import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Pane, Tablist, Tab } from 'evergreen-ui';
import { SheetTabBarProps } from './types';

export function TabBar<E>(props: SheetTabBarProps<E>) {
  const { tabRoutes, selectedTab, updateSelectedTab } = props;

  // const { url } = useRouteMatch();
  // const history = useHistory();
  // hack to get the focus on last tab
  const anchorTab = useRef<any>(null);

  useLayoutEffect(() => {
    if (anchorTab && anchorTab.current) anchorTab.current.focus();
  });

  return (
    <Pane display="flex" padding={8}>
      <Tablist>
        {tabRoutes.map((route, idx) => (
          // <TabLink key={route.path} to={`${url}/${route.path}`}>
          <Tab
            key={idx}
            isSelected={route.path === selectedTab}
            onSelect={() => updateSelectedTab(route.path)}
            innerRef={route.path === selectedTab ? anchorTab : undefined}
          >
            {route.name}
          </Tab>
          // </TabLink>
        ))}
      </Tablist>
    </Pane>
  );
}
