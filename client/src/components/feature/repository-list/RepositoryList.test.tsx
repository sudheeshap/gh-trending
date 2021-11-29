import React from 'react';
import { waitFor } from '@testing-library/react';

import { queryClient, renderWithRouter } from 'test-utils';
import RepositoryList from 'components/feature/repository-list/RepositoryList';
import { RepositoryInterface } from 'interfaces/repository.interface';
import * as apiTrending from 'api/trending';

const mockFetchRepositories = jest.spyOn(apiTrending, 'fetchRepositories');

const repositories: RepositoryInterface[] = [
  {
    builtBy: [
      {
        avatar: 'https://avatars.githubusercontent.com/u/7554214?s=40&v=4',
        username: 'srindom',
        url: 'https://github.com/srindom',
      },
    ],
    description: 'The open-source Shopify alternative⚡️',
    forks: 182,
    language: 'JavaScript',
    languageColor: '#f1e05a',
    rank: 1,
    repositoryName: 'medusa',
    since: 'daily',
    starsSince: 552,
    totalStars: 2958,
    url: 'https://github.com/medusajs/medusa',
    username: 'medusajs',
  },
];

describe('RepositoryList', () => {
  beforeEach(() => {
    queryClient.clear();
  });

  it('should render a list header', () => {
    const { getByTestId } = renderWithRouter(<RepositoryList />);

    const listHeader = getByTestId('list-header');

    expect(listHeader).toBeInTheDocument();
  });

  it('header should render spoken language filter', () => {
    const { getByTestId } = renderWithRouter(<RepositoryList />);

    const spokenLangFilter = getByTestId('select-spoken-lang');

    expect(spokenLangFilter).toBeInTheDocument();
  });

  it('header should render programming language filter', () => {
    const { getByTestId } = renderWithRouter(<RepositoryList />);

    const LanguageFilter = getByTestId('select-language');

    expect(LanguageFilter).toBeInTheDocument();
  });

  it('header should render date range filter', () => {
    const { getByTestId } = renderWithRouter(<RepositoryList />);
    const dateFilter = getByTestId('select-date');

    expect(dateFilter).toBeInTheDocument();
  });

  it('should render repository list placeholder while loading', () => {
    const { getAllByTestId } = renderWithRouter(<RepositoryList />);
    const repos = getAllByTestId('repository');

    expect(repos[0]).toHaveClass('placeholder');
  });

  it('should render error state on repository fetch fail', async () => {
    mockFetchRepositories.mockRejectedValueOnce('Oops error...');

    const { getByTestId } = renderWithRouter(<RepositoryList />);

    await waitFor(() => {
      const errorMessage = getByTestId('message');

      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('should render the repositories on fetch success', async () => {
    mockFetchRepositories.mockImplementationOnce(() => Promise.resolve(repositories));

    const { getAllByTestId } = renderWithRouter(<RepositoryList />);

    await waitFor(() => {
      const repos = getAllByTestId('repository');

      expect(repos).toHaveLength(1);
    });
  });
});
