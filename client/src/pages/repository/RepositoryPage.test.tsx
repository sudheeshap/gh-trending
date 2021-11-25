import React from 'react';

import { renderWithRouter } from 'test-utils';
import RepositoryPage from './RepositoryPage';

describe('RepositoryPage', () => {
  it('should render a header', () => {
    const { getByTestId } = renderWithRouter(<RepositoryPage />);
    const appHeader = getByTestId('app-header');

    expect(appHeader).toBeInTheDocument();
  });

  it('should render a list', () => {
    const { getByTestId } = renderWithRouter(<RepositoryPage />);
    const repoList = getByTestId('repository-list');

    expect(repoList).toBeInTheDocument();
  });

  it('should render a footer', () => {
    const { getByTestId } = renderWithRouter(<RepositoryPage />);
    const appFooter = getByTestId('app-footer');

    expect(appFooter).toBeInTheDocument();
  });
});
