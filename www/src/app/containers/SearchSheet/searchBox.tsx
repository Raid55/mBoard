import React, { forwardRef, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { SearchInput } from 'evergreen-ui';

interface Props {
  onAnyAction?: () => void;
  value?: string;
  onInput?: (e: SyntheticEvent) => void;
}

export const SearchBox = forwardRef((props: Props, ref) => {
  const { onAnyAction, value, onInput } = props;
  const { t } = useTranslation('SearchSheet');

  return (
    <SearchDiv>
      <SearchInput
        innerRef={ref}
        placeholder={t('searchBox')}
        onClick={onAnyAction}
        onFocus={onAnyAction}
        value={value}
        onInput={onInput}
      />
    </SearchDiv>
  );
});

const SearchDiv = styled.div`
  margin: 1% auto 1% 30%;
`;
