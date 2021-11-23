import React from 'react';

import { render } from 'test-utils';
import RepositoryList from 'components/feature/repository-list/RepositoryList';

describe('RepositoryList', () => {
  it('header should render spoken language filter', () => {
    const { getByTestId } = render(<RepositoryList />);
    const spokenLangFilter = getByTestId('select-spoken-lang');

    expect(spokenLangFilter).toBeInTheDocument();
  });

  it('header should render programming language filter', () => {
    const { getByTestId } = render(<RepositoryList />);
    const LanguageFilter = getByTestId('select-language');

    expect(LanguageFilter).toBeInTheDocument();
  });

  it('header should render date range filter', () => {
    const { getByTestId } = render(<RepositoryList />);
    const dateFilter = getByTestId('select-date');

    expect(dateFilter).toBeInTheDocument();
  });

  it('should render the repositories from data', () => {
    expect(1).toEqual(2);
  });
});
