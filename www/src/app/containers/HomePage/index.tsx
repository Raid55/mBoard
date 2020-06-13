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
import { selectSearchInput } from '../SearchSheet/selectors';
import { homePageSaga } from './saga';

import { Paginator } from '../../components/Paginator';
import { ExpandablePosterList } from '../../components/ExpandablePosterList';
import { MovieSideSheet } from '../MovieSideSheet/Loadable';
import { SearchSheet } from '../SearchSheet/Loadable';
import { SearchBox } from '../SearchSheet/searchBox';

const TEMP_MOVIES = [
  {
    popularity: 481.82,
    vote_count: 3681,
    video: false,
    poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
    id: 419704,
    adult: false,
    backdrop_path: '/5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
    original_language: 'en',
    original_title: 'Ad Astra',
    genre_ids: [18, 878],
    title: 'Ad Astra',
    vote_average: 6,
    overview:
      'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
    release_date: '2019-09-17',
  },
  {
    popularity: 176.021,
    vote_count: 81,
    video: false,
    poster_path: '/ygCQnDEqUEIamBpdQdDYnFfxvgM.jpg',
    id: 339095,
    adult: false,
    backdrop_path: '/t93doi7EzoqLFckidrGGnukFPwd.jpg',
    original_language: 'en',
    original_title: 'The Last Days of American Crime',
    genre_ids: [28, 80, 53],
    title: 'The Last Days of American Crime',
    vote_average: 5.3,
    overview:
      'In the not-too-distant future, where as a final response to crime and terrorism, the U.S. government plans to broadcast a signal that will make it impossible for anyone to knowingly break the law.',
    release_date: '2020-06-05',
  },
  {
    popularity: 162.648,
    vote_count: 4505,
    video: false,
    poster_path: '/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg',
    id: 454626,
    adult: false,
    backdrop_path: '/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
    original_language: 'en',
    original_title: 'Sonic the Hedgehog',
    genre_ids: [28, 35, 878, 10751],
    title: 'Sonic the Hedgehog',
    vote_average: 7.5,
    overview:
      'Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.',
    release_date: '2020-02-12',
  },
  {
    popularity: 144.812,
    vote_count: 7849,
    video: false,
    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    id: 496243,
    adult: false,
    backdrop_path: '/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg',
    original_language: 'ko',
    original_title: '기생충',
    genre_ids: [35, 18, 53],
    title: 'Parasite',
    vote_average: 8.5,
    overview:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    release_date: '2019-05-30',
  },
  {
    popularity: 133.55,
    vote_count: 1647,
    video: false,
    poster_path: '/voku0sDMzQRwqBcTDq4X8j4sJHD.jpg',
    id: 11024,
    adult: false,
    backdrop_path: '/hxt1WzpSqMMDVtjafAXAnMIb0o9.jpg',
    original_language: 'en',
    original_title: 'Scooby-Doo 2: Monsters Unleashed',
    genre_ids: [12, 35, 14, 9648],
    title: 'Scooby-Doo 2: Monsters Unleashed',
    vote_average: 5.8,
    overview:
      "When Mystery, Inc. are guests of honor at the grand opening of the Coolsville Museum of Criminology, a masked villain shows up and creates havoc before stealing the costumes of the gang's most notorious villains...Could it be that their nemesis, mad scientist Jonathan Jacobo has returned and is trying to recreate their deadliest foes?",
    release_date: '2004-03-24',
  },
  {
    popularity: 108.779,
    vote_count: 83,
    video: false,
    poster_path: '/2GQGcJS6UwvePGWlmn73SvldZqW.jpg',
    id: 205891,
    adult: false,
    backdrop_path: '/rStHKPfxcuTXnKdYAyuZNpz0YsV.jpg',
    original_language: 'en',
    original_title: 'The Demented',
    genre_ids: [18, 27, 53],
    title: 'The Demented',
    vote_average: 3.8,
    overview:
      'Six college friends unite for a weekend getaway where they find themselves fighting for their lives after a terrorist attack turns the local residents into rage infused zombies.',
    release_date: '2013-07-30',
  },
  {
    popularity: 107.533,
    vote_count: 5320,
    video: false,
    poster_path: '/iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
    id: 530915,
    adult: false,
    backdrop_path: '/cqa3sa4c4jevgnEJwq3CMF8UfTG.jpg',
    original_language: 'en',
    original_title: '1917',
    genre_ids: [28, 18, 36, 10752],
    title: '1917',
    vote_average: 7.9,
    overview:
      'At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.',
    release_date: '2019-12-25',
  },
  {
    popularity: 105.663,
    vote_count: 2386,
    video: false,
    poster_path: '/i8QWXu6dGuTKKerJtnd0A4lUpbv.jpg',
    id: 290859,
    adult: false,
    backdrop_path: '/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg',
    original_language: 'en',
    original_title: 'Terminator: Dark Fate',
    genre_ids: [28, 12, 878],
    title: 'Terminator: Dark Fate',
    vote_average: 6.5,
    overview:
      'Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.',
    release_date: '2019-10-23',
  },
  {
    popularity: 104.474,
    vote_count: 0,
    video: false,
    poster_path: '/shx7pGYQ9s4t7WFe19eES2WOrMS.jpg',
    id: 610201,
    adult: false,
    backdrop_path: '/lvtEcdBmmrxzAQvRIYyDRQDeDJM.jpg',
    original_language: 'es',
    original_title: 'The Pale Door',
    genre_ids: [27, 37],
    title: 'The Pale Door',
    vote_average: 0,
    overview:
      'After a stagecoach robbery goes bad, two brothers leading a gang of cowboys must survive the night in a ghost town inhabited by a coven of witches.',
    release_date: '2020-08-31',
  },
  {
    popularity: 93.77,
    vote_count: 2148,
    video: false,
    poster_path: '/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg',
    id: 508439,
    adult: false,
    backdrop_path: '/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg',
    original_language: 'en',
    original_title: 'Onward',
    genre_ids: [12, 16, 35, 14, 10751],
    title: 'Onward',
    vote_average: 7.9,
    overview:
      'In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.',
    release_date: '2020-02-29',
  },
  {
    popularity: 92.103,
    vote_count: 4422,
    video: false,
    poster_path: '/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg',
    id: 495764,
    adult: false,
    backdrop_path: '/kvbbK2rLGSJh9rf6gg1i1iVLYQS.jpg',
    original_language: 'en',
    original_title:
      'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)',
    genre_ids: [28, 35, 80],
    title:
      'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)',
    vote_average: 7.2,
    overview:
      'Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.',
    release_date: '2020-02-05',
  },
  {
    popularity: 91.804,
    vote_count: 1758,
    video: false,
    poster_path: '/p69QzIBbN06aTYqRRiCOY1emNBh.jpg',
    id: 501170,
    adult: false,
    backdrop_path: '/A1lvRqwbLz0PIs5QyivFVzCarc6.jpg',
    original_language: 'en',
    original_title: 'Doctor Sleep',
    genre_ids: [18, 14, 27, 53],
    title: 'Doctor Sleep',
    vote_average: 7.1,
    overview:
      "Still irrevocably scarred by the trauma he endured as a child at the Overlook, Dan Torrance has fought to find some semblance of peace. But that peace is shattered when he encounters Abra, a courageous teenager with her own powerful extrasensory gift, known as the 'shine'. Instinctively recognising that Dan shares her power, Abra has sought him out, desperate for his help against the merciless Rose the Hat and her followers.",
    release_date: '2019-10-30',
  },
  {
    popularity: 90.662,
    vote_count: 826,
    video: false,
    poster_path: '/wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg',
    id: 514847,
    adult: false,
    backdrop_path: '/naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg',
    original_language: 'en',
    original_title: 'The Hunt',
    genre_ids: [28, 27, 53],
    title: 'The Hunt',
    vote_average: 6.7,
    overview:
      "Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",
    release_date: '2020-03-11',
  },
  {
    popularity: 86.042,
    vote_count: 7529,
    video: false,
    poster_path: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
    id: 429617,
    adult: false,
    backdrop_path: '/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
    original_language: 'en',
    original_title: 'Spider-Man: Far from Home',
    genre_ids: [28, 12, 878],
    title: 'Spider-Man: Far from Home',
    vote_average: 7.5,
    overview:
      'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
    release_date: '2019-06-28',
  },
  {
    popularity: 85.101,
    vote_count: 1714,
    video: false,
    poster_path: '/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg',
    id: 423204,
    adult: false,
    backdrop_path: '/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg',
    original_language: 'en',
    original_title: 'Angel Has Fallen',
    genre_ids: [28, 53],
    title: 'Angel Has Fallen',
    vote_average: 6.3,
    overview:
      'After a treacherous attack, Secret Service agent Mike Banning is charged with attempting to assassinate President Trumbull. Chased by his own colleagues and the FBI, Banning begins a race against the clock to clear his name.',
    release_date: '2019-08-21',
  },
  {
    popularity: 84.748,
    vote_count: 13065,
    video: false,
    poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    id: 475557,
    adult: false,
    backdrop_path: '/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg',
    original_language: 'en',
    original_title: 'Joker',
    genre_ids: [80, 18, 53],
    title: 'Joker',
    vote_average: 8.2,
    overview:
      'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    release_date: '2019-10-02',
  },
  {
    popularity: 84.374,
    vote_count: 2561,
    video: false,
    poster_path: '/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
    id: 338762,
    adult: false,
    backdrop_path: '/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg',
    original_language: 'en',
    original_title: 'Bloodshot',
    genre_ids: [28, 878],
    title: 'Bloodshot',
    vote_average: 7,
    overview:
      "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
    release_date: '2020-03-05',
  },
  {
    popularity: 72.405,
    vote_count: 8,
    video: false,
    poster_path: '/20TZbCFTCyfTwkDJ3F060elYaKX.jpg',
    id: 702936,
    adult: false,
    backdrop_path: '/3i2xnGLUAteDpSke5C9w2fhYmfL.jpg',
    original_language: 'en',
    original_title: "Sniper: Assassin's End",
    genre_ids: [28],
    title: "Sniper: Assassin's End",
    vote_average: 4.9,
    overview:
      'Special Ops sniper Brandon Beckett is set up as the primary suspect for the murder of a foreign dignitary on the eve of signing a high-profile trade agreement with the United States. Narrowly escaping death, Beckett realizes that there may be a dark operative working within the government, and partners with the only person whom he can trust: his father, legendary sniper Sgt. Thomas Beckett. Both Becketts are on the run from the CIA, Russian mercenaries and Lady Death, a Yakuza-trained assassin with sniper skills that rival both legendary sharpshooters.',
    release_date: '2020-06-15',
  },
  {
    popularity: 69.868,
    vote_count: 418,
    video: false,
    poster_path: '/kNDFTt8O6g7LhIFo1mwlezTTXme.jpg',
    id: 652483,
    adult: false,
    backdrop_path: '/9OaIWmWI7Ph3jqj235zQIrh5yVd.jpg',
    original_language: 'pt',
    original_title: 'Modo Avião',
    genre_ids: [35, 10749],
    title: 'Airplane Mode',
    vote_average: 6.4,
    overview:
      "When Ana, an influencer, crashes her car while talking on the phone, she's shipped to her grumpy grandfather's farm -- and forced into a digital detox.",
    release_date: '2020-01-23',
  },
  {
    popularity: 69.775,
    vote_count: 65,
    video: false,
    poster_path: '/iPOHjGttfXfPsqhhv6x0fv5rU1H.jpg',
    id: 449756,
    adult: false,
    backdrop_path: '/vT1hZ96uCcvv3C20d9nm90ZX1Ql.jpg',
    original_language: 'en',
    original_title: 'The Postcard Killings',
    genre_ids: [80, 18, 9648],
    title: 'The Postcard Killings',
    vote_average: 6.3,
    overview:
      'A New York detective investigates the death of his daughter who was murdered while on her honeymoon in London and recruits the help of a Scandinavian journalist when other couples throughout Europe suffer a similar fate.',
    release_date: '2020-03-13',
  },
];

interface Props {}

export function HomePage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });

  const homePage = useSelector(selectHomePage);
  const searchValue = useSelector(selectSearchInput);

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
      <SearchBox onAnyAction={openSearch} value={searchValue} />
      <ExpandablePosterList
        posters={TEMP_MOVIES}
        tabName="Sci-Fi Flicks"
        tabColor="#FBE6A2"
        overflow
      />
      {/* <div>
        <Paginator />
      </div> */}
      {/* <ExpandablePosterList posters={TEMP_MOVIES} tabName={'Discover'} />
      <ExpandablePosterList
        posters={TEMP_MOVIES}
        tabName="Action Movies"
        tabColor="#FAE2E2"
      /> */}
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
