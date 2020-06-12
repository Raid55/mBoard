import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { Heading, Pane, Paragraph, Badge, Spinner } from 'evergreen-ui';
import { PosterImg } from '../../components/PosterImg';
import { SheetHeader } from '../../components/ContentSideSheet';
import { WatchYTVideo } from '../../components/WatchYTVideo';
import {
  FullMovieDetails,
  MovieGenre,
  US_MOVIE_CERTS,
  MOVIE_GENRES,
  MOVIE_STATUS,
  VideoDetails,
} from 'commontypes/movies';

interface Props extends Partial<FullMovieDetails> {
  ytVideo?: VideoDetails;
  usCertification?: US_MOVIE_CERTS;
  loading?: boolean;
}

export function MovieSheetHeader(props: Props) {
  const {
    poster_path,
    genres,
    title,
    release_date,
    runtime,
    status,
    loading,
    ytVideo,
    usCertification,
  } = props;

  return (
    <SheetHeader>
      {loading ? (
        <PosterDiv>
          <HeaderLoading />
        </PosterDiv>
      ) : (
        <>
          <PosterDiv>
            <PosterImg
              posterPath={poster_path}
              name={title}
              loading={loading}
            />
            {ytVideo && <WatchYTVideo video={ytVideo} />}
          </PosterDiv>
          <HeaderMetaDiv>
            <CertBadge cert={usCertification} />
            <RuntimeBadge runtime={runtime} />
            <GenreBadge genres={genres} />
            <TitlePane>
              <Heading size={600}>{title}</Heading>
              <Paragraph size={400} color="muted">
                ({new Date(release_date || '').getFullYear() || 'No Year'})
                {' - '}
                {status && <StatusBadge status={status} />}
              </Paragraph>
            </TitlePane>
          </HeaderMetaDiv>
        </>
      )}
    </SheetHeader>
  );
}

const StatusBadge = (props: { status?: MOVIE_STATUS }) => {
  const { status } = props;

  function statusColor(status?: MOVIE_STATUS): any {
    switch (status) {
      case MOVIE_STATUS.rumored:
        return 'purple';
      case MOVIE_STATUS.released:
        return 'green';
      case MOVIE_STATUS.planned:
        return 'teal';
      case MOVIE_STATUS.inProduction:
        return 'orange';
      case MOVIE_STATUS.postProduction:
        return 'yellow';
      case MOVIE_STATUS.canceled:
        return 'red';
      default:
        return 'neutral';
    }
  }

  return (
    <Badge color={statusColor(status)} marginRight={8}>
      {status}
    </Badge>
  );
};

const RuntimeBadge = (props: { runtime?: number }) => {
  const { t } = useTranslation('MovieSideSheet');

  return (
    <MetaBadgesPane>
      <Badge color="neutral" isSolid marginRight={8}>
        {t('header.runtime')}
      </Badge>
      <Badge color="orange" marginRight={8}>
        {props.runtime || 0} {t('header.min')}
      </Badge>
    </MetaBadgesPane>
  );
};

const GenreBadge = (props: { genres?: MovieGenre[] }) => {
  const { t } = useTranslation('MovieSideSheet');

  function genreColor(id: MOVIE_GENRES): any {
    switch (id) {
      case MOVIE_GENRES.Action:
      case MOVIE_GENRES.Romance:
      case MOVIE_GENRES.Adventure:
      case MOVIE_GENRES.Drama:
        return 'red';
      case MOVIE_GENRES.SciFi:
      case MOVIE_GENRES.Fantasy:
        return 'green';
      case MOVIE_GENRES.Animation:
      case MOVIE_GENRES.Crime:
        return 'blue';
      case MOVIE_GENRES.History:
      case MOVIE_GENRES.Mystery:
      case MOVIE_GENRES.War:
        return 'orange';
      case MOVIE_GENRES.Horror:
      case MOVIE_GENRES.Thriller:
        return 'purple';
      case MOVIE_GENRES.Comedy:
      case MOVIE_GENRES.Music:
      case MOVIE_GENRES.Western:
        return 'yellow';
      case MOVIE_GENRES.Family:
        return 'teal';
      case MOVIE_GENRES.Documentary:
      default:
        return 'neutral';
    }
  }

  return (
    <MetaBadgesPane>
      <Badge color="neutral" isSolid marginRight={8}>
        {t('header.genre')}
      </Badge>
      {(props.genres || []).map(genre => (
        <Badge
          key={genre.id}
          color={genreColor(genre.id)}
          isSolid
          marginRight={8}
        >
          {genre.name}
        </Badge>
      ))}
    </MetaBadgesPane>
  );
};

const CertBadge = (props: { cert?: US_MOVIE_CERTS }) => {
  const { t } = useTranslation('MovieSideSheet');

  function certColor(cert?: US_MOVIE_CERTS) {
    switch (cert) {
      case US_MOVIE_CERTS.g:
        return 'teal';
      case US_MOVIE_CERTS.pg:
        return 'blue';
      case US_MOVIE_CERTS.pg13:
        return 'green';
      case US_MOVIE_CERTS.r:
      case US_MOVIE_CERTS.nc17:
        return 'red';
      case US_MOVIE_CERTS.nr:
      default:
        return 'neutral';
    }
  }

  return (
    <MetaBadgesPane>
      <Badge color="neutral" isSolid marginRight={8}>
        {t('header.rated')}
      </Badge>
      <Badge color={certColor(props.cert) as any} isSolid marginRight={8}>
        {props.cert || US_MOVIE_CERTS.nr}
      </Badge>
    </MetaBadgesPane>
  );
};

const HeaderLoading = () => {
  return (
    <Spinner alignSelf="center" marginY="60%" marginX="auto" height={64} />
  );
};

const HeaderMetaDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitlePane = styled(Pane)`
  background-color: white;
  margin: 0.4rem 0.6rem;
  border-radius: 5px;
  padding: 0.3rem;
  min-width: 12rem;
  border: 1px solid #edf0f2;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3);
`;

const MetaBadgesPane = styled(Pane)`
  margin: 0 0.6rem;
`;

const PosterDiv = styled.div`
  border-radius: 5px;
  width: 9rem;
  min-width: 9rem;
  padding: 3px;
  margin: 0.4rem 0.6rem;
  background-color: white;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3);
`;
