/**
 *
 * MovieSideSheet
 *
 */

import React, { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Switch,
  Route,
  Redirect,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { movieSideSheetSaga } from './saga';
import { MovieTabs } from './types';
import * as s from './selectors';

import {
  ContentSideSheet,
  SheetTabBar,
} from '../../components/ContentSideSheet';
import { MovieSheetHeader } from './MovieSheetHeader';
import { TabRoute } from '../../components/ContentSideSheet/types';
import { Card, Heading, Pane } from 'evergreen-ui';

interface Props {}

export function MovieSideSheet(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: movieSideSheetSaga });

  const { id } = useParams();
  const { t } = useTranslation('MovieSideSheet');
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const closed = useSelector(s.selectClosed);
  const selectedTab = useSelector(s.selectSelectedTab);
  const loading = useSelector(s.selectLoading);

  useEffect(() => {
    const pathEnd = history.location.pathname.split('/').pop() || '';
    dispatch(actions.updateMovieID(id));
    dispatch(actions.loadInfo());
    if (selectedTab !== pathEnd && pathEnd in MovieTabs)
      dispatch(actions.updateSelectedTab(pathEnd as MovieTabs));
  }, [dispatch, history]);

  const updateSelectedTab = useCallback(
    (tab: MovieTabs) => {
      dispatch(actions.updateSelectedTab(tab));
      history.push(`${url}/${tab}`);
    },
    [dispatch, history, url],
  );

  const closeSideSheet = useCallback(() => {
    dispatch(actions.closeSideSheet());
    history.push('/');
  }, [dispatch, history]);

  const tabRoutes: TabRoute<MovieTabs>[] = [
    {
      path: MovieTabs.info,
      component: () => <Info text={MovieTabs.info} loading={loading} />,
      name: t(`${MovieTabs.info}.tabName`),
    },
    {
      path: MovieTabs.credits,
      component: () => <Info text={MovieTabs.credits} loading={loading} />,
      name: t(`${MovieTabs.credits}.tabName`),
    },
    {
      path: MovieTabs.reviews,
      component: () => <Info text={MovieTabs.reviews} loading={loading} />,
      name: t(`${MovieTabs.reviews}.tabName`),
    },
    {
      path: MovieTabs.recs,
      component: () => <Info text={MovieTabs.recs} loading={loading} />,
      name: t(`${MovieTabs.recs}.tabName`),
    },
  ];

  return (
    <>
      <Helmet>
        <title>lol</title>
        <meta
          name="description"
          content={`Information about the movie: ${'lol'}`}
        />
      </Helmet>
      <ContentSideSheet closed={closed} onClose={closeSideSheet}>
        <MovieSheetHeader
          posterPath="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
          ytVideo="P6AaSMfXHbA"
          year={1998}
          runtime={121}
          certification="PG-13"
          genre={[1, 2]}
          title="ad stupid"
        />
        <SheetTabBar<MovieTabs>
          tabRoutes={tabRoutes}
          selectedTab={selectedTab}
          updateSelectedTab={updateSelectedTab}
        />
        <Switch>
          {tabRoutes.map(route => (
            <Route
              key={route.path}
              path={`${path}/${route.path}`}
              component={route.component}
            />
          ))}
          <Redirect path={path} to={`${url}/${selectedTab}`} />
        </Switch>
      </ContentSideSheet>
    </>
  );
}

interface InfoProps {
  text: string;
  loading: boolean;
}
const Info = (props: InfoProps) => {
  return (
    <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
      <Card
        backgroundColor="white"
        elevation={0}
        height={240}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading>{props.text}</Heading>
      </Card>
    </Pane>
  );
};
