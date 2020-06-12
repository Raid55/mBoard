import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { Card, Heading, Paragraph, Spinner, Avatar, Text } from 'evergreen-ui';
import { FullMovieDetails } from 'commontypes/movies';

interface Props extends Partial<FullMovieDetails> {
  loading?: boolean;
}

export function InfoSheet(props: Props) {
  const { overview, loading } = props;

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
            <InfoCard>
              <Heading>{t('info.starring')}</Heading>
              <StarringDiv>
                <StarringDiv>
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                    name="Alan Turing"
                    size={50}
                  />
                  <Paragraph fontSize={8}>Alan Turin</Paragraph>
                </StarringDiv>
                <Card margin={16}>
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                    name="Alan Turing"
                    size={50}
                  />
                  <Paragraph fontSize={8}>Alan Turin</Paragraph>
                </Card>
                <Card margin={16}>
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                    name="Alan Turing"
                    size={50}
                  />
                  <Paragraph fontSize={8}>Alan Turin</Paragraph>
                </Card>
                <Card margin={16}>
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                    name="Benidict ComberBatch"
                    size={50}
                  />
                  <Paragraph fontSize={8}>Benidict ComberBatch</Paragraph>
                </Card>
              </StarringDiv>
            </InfoCard>
          </MainContainer>
          <SideContainer>
            <InfoCard>
              <Heading>Directed by</Heading>
              <Paragraph>Quintinilo Tarnan Tini Ano</Paragraph>
            </InfoCard>
            <InfoCard>
              <Heading>Produced by</Heading>
              <Paragraph>Johnson Bernstein</Paragraph>
              <Paragraph>Jacob Bachman</Paragraph>
              <Paragraph>David Rossefi</Paragraph>
              <Paragraph>Adam Sandler</Paragraph>
            </InfoCard>
            <InfoCard>
              <Heading>Written by</Heading>
              <Paragraph>Quintinilo Tarnan Tini Ano</Paragraph>
              <Paragraph>Piso de Mujado</Paragraph>
            </InfoCard>
            <InfoCard>
              <Heading>Release Date</Heading>
              <Paragraph>Quintinilo Tarnan Tini Ano</Paragraph>
            </InfoCard>
            <InfoCard>
              <Heading>Budget</Heading>
              <Paragraph>$ 1 million</Paragraph>
            </InfoCard>
            <InfoCard>
              <Heading>Box Office</Heading>
              <Paragraph>$ 100 million</Paragraph>
            </InfoCard>
          </SideContainer>
        </>
      )}
    </SheetContainer>
  );
}

// const MadeBy;

const StarringDiv = styled.div`
  display: flex;
  flex-direction: row;
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
