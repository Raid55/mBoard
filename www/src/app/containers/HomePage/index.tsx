/**
 *
 * HomePage
 *
 */

import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  Link,
  useHistory,
} from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import styled from 'styled-components/macro';

import { reducer, sliceKey } from './slice';
import { selectHomePage } from './selectors';
import { homePageSaga } from './saga';

import { Paginator } from '../../components/Paginator';
import { ExpandablePosterList } from '../../components/ExpandablePosterList';
import { MovieSideSheet } from '../MovieSideSheet/Loadable';
import { SearchSheet } from '../SearchSheet/Loadable';
import { SearchBox } from '../SearchSheet/searchBox';

const TEMP_MOVIES = [
  {
    id: 1,
    name: 'ad stupida',
    posterPath:
      'https://image.tmdb.org/t/p/w500/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg',
  },
  {
    id: 2,
    name: 'space troupers 2',
    posterPath:
      'https://image.tmdb.org/t/p/w500/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg',
  },
  {
    id: 3,
    name: '2020: world odessay',
    posterPath:
      'https://image.tmdb.org/t/p/w500/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg',
  },
  {
    id: 4,
    name: 'avatar: 23',
    posterPath:
      'https://image.tmdb.org/t/p/w500/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg',
  },
  {
    id: 5,
    name: 'the usual suspects 2: without k.spacy',
    posterPath:
      'https://image.tmdb.org/t/p/w500/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg',
  },
  {
    id: 6,
    name: 'citizen germain',
    posterPath:
      'https://image.tmdb.org/t/p/w500/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg',
  },
  {
    id: 7,
    name: 'the who: an auto-autobiorgraphy',
    posterPath:
      'https://image.tmdb.org/t/p/w500/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg',
  },
  {
    id: 8,
    name: 'tintin',
    posterPath:
      'https://image.tmdb.org/t/p/w500/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg',
  },
  {
    id: 9,
    name: 'jack and jill: go skiing',
    posterPath:
      'https://image.tmdb.org/t/p/w500/x3BOzx2rUc5c3gG9UCelzSxv8n4.jpg',
  },
];

interface Props {}

export function HomePage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });

  const homePage = useSelector(selectHomePage);
  const dispatch = useDispatch();

  const { path } = useRouteMatch();
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const openSearch = useCallback(() => {
    history.push('/search');
  }, [dispatch, history]);

  return (
    <>
      <Helmet>
        <title>home</title>
        <meta name="description" content="mBoard homepage" />
      </Helmet>
      <SearchBox onAnyAction={openSearch} />
      <ExpandablePosterList
        posters={[]}
        tabName="Sci-Fi Flicks"
        tabColor="#FBE6A2"
      />
      <div>
        <Paginator />
      </div>
      <ExpandablePosterList posters={TEMP_MOVIES} tabName={'Discover'} />
      <ExpandablePosterList
        posters={TEMP_MOVIES}
        tabName="Action Movies"
        tabColor="#FAE2E2"
      />
      <Switch>
        <Route path="/search" component={SearchSheet} />
        <Route path="/movie/:id" component={MovieSideSheet} />
        <Redirect path={path} to={`/`} />
      </Switch>
    </>
  );
}

const SearchLink = styled(Link)`
  text-decoration: none;
`;
