/**
 *
 * Paginator
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { IconButton, Paragraph } from 'evergreen-ui';

interface Props {
  page?: number;
  totalPages?: number;
  handlePageClick?: (page: number) => void;
}

export function Paginator(props: Props) {
  const { page, totalPages, handlePageClick } = props;

  const { t } = useTranslation('components');

  return (
    <Div>
      <IconButton
        icon="chevron-left"
        marginX={4}
        onClick={() => handlePageClick && page && handlePageClick(page - 1)}
        disable={page == 1}
      />
      <P>{`${t('paginator.page')} ${page} ${t(
        'paginator.of',
      )} ${totalPages}`}</P>
      <IconButton
        icon="chevron-right"
        marginX={4}
        onClick={() => handlePageClick && page && handlePageClick(page + 1)}
        disable={page == totalPages}
      />
    </Div>
  );
}
const P = styled(Paragraph)``;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
