import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { Card, Heading, Paragraph, Spinner, Avatar, Text } from 'evergreen-ui';
import {
  FullMovieDetails,
  CreditsCrew,
  CreditsCast,
  MovieCredits,
  CREW_HIGHLIGHT,
} from 'commontypes/movies';
import { ENDPOINT_PRE } from 'commontypes/api';
const { api, posters } = ENDPOINT_PRE;

interface Props extends Partial<FullMovieDetails> {
  credits: MovieCredits;
  loading?: boolean;
}

export function InfoSheet(props: Props) {
  const { overview, loading, budget, revenue, release_date, credits } = props;

  const { t } = useTranslation('MovieSideSheet');
  return (
    <SheetContainer>
      {loading ? (
        <Spinner alignSelf="center" marginX="auto" height={400} />
      ) : (
        <>
          <MainContainer>
            <InfoCard>
              <Heading>{t('info.overview')}</Heading>
              <Paragraph>{overview}</Paragraph>
            </InfoCard>
            <StarringInfo cast={credits.cast || []} />
          </MainContainer>
          <SideContainer>
            <MadeByInfo crew={credits.crew || []} />
            {release_date && (
              <InfoCard>
                <Heading>{t('info.release')}</Heading>
                <Paragraph>
                  {new Date(release_date || '').toDateString() ||
                    t('info.noReleaseDate')}
                </Paragraph>
              </InfoCard>
            )}
            <MoneyInfo budget={budget} revenue={revenue} />
          </SideContainer>
        </>
      )}
    </SheetContainer>
  );
}

interface MoneyInfoProps {
  budget?: number;
  revenue?: number;
}
const MoneyInfo = (props: MoneyInfoProps) => {
  const { revenue, budget } = props;

  const { t } = useTranslation('MovieSideSheet');

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <InfoCard>
        <Heading>{t('info.budget')}</Heading>
        <Paragraph>{formatter.format(budget || 0)}</Paragraph>
      </InfoCard>
      <InfoCard>
        <Heading>{t('info.revenue')}</Heading>
        <Paragraph>{formatter.format(revenue || 0)}</Paragraph>
      </InfoCard>
    </>
  );
};

interface MadeByInfoProps {
  crew: CreditsCrew[];
}
const MadeByInfo = (props: MadeByInfoProps) => {
  const { crew } = props;

  const { t } = useTranslation('MovieSideSheet');

  return (
    <>
      {Object.values(CREW_HIGHLIGHT).map(highlight => (
        <InfoCard key={highlight}>
          <Heading>{t(`info.${highlight}`)}</Heading>
          {crew.length > 0 ? (
            crew
              .filter(entry => entry.job == highlight)
              .map(entry => <Paragraph key={entry.id}>{entry.name}</Paragraph>)
          ) : (
            <Paragraph>{t('info.noEntries')}</Paragraph>
          )}
        </InfoCard>
      ))}
    </>
  );
};

interface StarringInfoProps {
  cast: CreditsCast[];
}
const StarringInfo = (props: StarringInfoProps) => {
  const { cast } = props;

  const { t } = useTranslation('MovieSideSheet');

  return (
    <InfoCard>
      <Heading>{t('info.starring')}</Heading>
      <StarringContainer>
        {cast.length > 0
          ? cast.slice(0, 4).map(entry => (
              <StarringDiv key={entry.id}>
                <Avatar
                  src={`${api}${posters}${entry.profile_path}`}
                  name={entry.name}
                  size={40}
                />
                <Paragraph wordWrap="break-word" marginX={4}>
                  {entry.name}
                </Paragraph>
              </StarringDiv>
            ))
          : null}
      </StarringContainer>
    </InfoCard>
  );
};

const StarringDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px 2px;
  align-items: center;
  border: 1px solid #edf0f2;
  border-radius: 5px;
  padding: 4px;
  flex: 1 1 auto;
`;

const StarringContainer = styled.div`
  justify-content: space-evenly;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;
`;

const InfoCard = styled(Card)`
  background-color: white;
  border: 1px solid #edf0f2;
  padding: 4px 8px;
  margin: 4px 0;
`;

const SheetContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: #f9f9fb;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 16px 8px 16px 16px;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 16px 16px 16px 8px;
`;
