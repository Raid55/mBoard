export interface TabRoute<E> {
  path: E;
  component: () => JSX.Element;
  name: string;
}

export interface SheetTabBarProps<E> {
  tabRoutes: TabRoute<E>[];
  selectedTab: E;
  updateSelectedTab: (tab: E) => void;
}
