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
  useLocation,
} from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { movieSideSheetSaga } from './saga';
import { MovieTabs } from './types';
import {
  selectSelectedTab,
  selectLoading,
  selectMovie,
  selectYTVideo,
  selectUSCertification,
  selectCredits,
} from './selectors';

import {
  ContentSideSheet,
  SheetTabBar,
} from '../../components/ContentSideSheet';
import { MovieSheetHeader } from './MovieSheetHeader';
import {
  InfoSheet,
  CastSheet,
  CrewSheet,
  SimilarSheet,
} from './Sheets/Loadable';
import { TabRoute } from '../../components/ContentSideSheet/types';

interface Props {}

export function MovieSideSheet(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: movieSideSheetSaga });

  const { t } = useTranslation('MovieSideSheet');

  const { id } = useParams();
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();

  const movie = useSelector(selectMovie);
  const loading = useSelector(selectLoading);
  const selectedTab = useSelector(selectSelectedTab);
  const ytVideo = useSelector(selectYTVideo);
  const usCert = useSelector(selectUSCertification);
  const credits = useSelector(selectCredits);

  useEffect(() => {
    if (!loading && (!movie || id !== movie.id))
      dispatch(actions.loadMovie(id));
  }, [id]);

  useEffect(() => {
    const pathEnd = location.pathname.split('/').pop() || '';
    if (selectedTab !== pathEnd && pathEnd in MovieTabs)
      dispatch(actions.updateSelectedTab(pathEnd as MovieTabs));
  }, [location]);

  const updateSelectedTab = useCallback(
    (tab: MovieTabs) => {
      dispatch(actions.updateSelectedTab(tab));
      history.push(`${url}/${tab}`);
    },
    [url],
  );

  const closeSideSheet = useCallback(() => {
    dispatch(actions.resetTab());
    history.push('/');
  }, [dispatch, history]);

  const tabRoutes: TabRoute<MovieTabs>[] = [
    {
      path: MovieTabs.info,
      component: () => (
        <InfoSheet {...movie} credits={credits} loading={loading} />
      ),
      name: t(`${MovieTabs.info}.tabName`),
    },
    {
      path: MovieTabs.cast,
      component: () => <CastSheet cast={credits.cast} loading={loading} />,
      name: t(`${MovieTabs.cast}.tabName`),
    },
    {
      path: MovieTabs.crew,
      component: () => <CrewSheet crew={credits.crew} loading={loading} />,
      name: t(`${MovieTabs.crew}.tabName`),
    },
    {
      path: MovieTabs.similar,
      component: () => (
        <SimilarSheet similar={movie?.similar} loading={loading} />
      ),
      name: t(`${MovieTabs.similar}.tabName`),
    },
  ];

  return (
    <ContentSideSheet onClose={closeSideSheet}>
      <MovieSheetHeader
        {...movie}
        ytVideo={ytVideo}
        usCertification={usCert}
        loading={loading}
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
  );
}

interface InfoProps {
  text: string;
  loading: boolean;
}
