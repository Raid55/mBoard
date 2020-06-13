import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { Pane, Table, Avatar, Text, Spinner } from 'evergreen-ui';
import { FullMovieDetails, CreditsCrew } from 'commontypes/movies';
import { ENDPOINT_PRE } from 'commontypes/api';
const { api, posters } = ENDPOINT_PRE;

interface Props {
  crew: CreditsCrew[];
  loading?: boolean;
}

export function CrewSheet(props: Props) {
  const { crew, loading } = props;

  return (
    <Pane flex="1" background="tint1" padding={16}>
      {loading ? (
        <Spinner alignSelf="center" marginX="auto" height={400} />
      ) : (
        <Table border>
          <Table.Head>
            <Table.SearchHeaderCell />
            <Table.TextHeaderCell>Job</Table.TextHeaderCell>
            <Table.TextHeaderCell>Department</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body height={313}>
            {crew.length > 0 ? (
              crew.map(entry => (
                <Table.Row>
                  <Table.Cell display="flex" alignItems="center">
                    <Avatar
                      src={`${api}${posters}${entry.profile_path}`}
                      name={entry.name}
                    />
                    <Text marginLeft={8} fontWeight={500}>
                      {entry.name}
                    </Text>
                  </Table.Cell>
                  <Table.TextCell>{entry.job}</Table.TextCell>
                  <Table.TextCell>{entry.department}</Table.TextCell>
                </Table.Row>
              ))
            ) : (
              <NoRows />
            )}
          </Table.Body>
        </Table>
      )}
    </Pane>
  );
}

const NoRows = () => {
  const { t } = useTranslation('MovieSideSheet');

  return (
    <Table.Row>
      <Table.Cell display="flex" alignItems="center">
        <Text marginLeft={8} size={300} fontWeight={500}>
          {t('crew.noEntries')}
        </Text>
      </Table.Cell>
    </Table.Row>
  );
};

const Wrapper = styled(Pane)``;
