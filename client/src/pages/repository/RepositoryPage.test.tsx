import React from 'react';

import { render } from 'test-utils';
import RepositoryPage from './RepositoryPage';

describe('RepositoryPage', () => {
  it('should render a header', () => {
    const { getByTestId } = render(<RepositoryPage />);
    const appHeader = getByTestId('app-header');

    expect(appHeader).toBeInTheDocument();
  });

  it('should render page header with title and description', () => {
    expect(1).toEqual(2);
  });

  it('should render repository list placeholder', () => {
    expect(1).toEqual(2);
  });

  it('should render error state on repository fetch fail', () => {
    expect(1).toEqual(2);
  });

  it('should render repository list on fetch success', () => {
    expect(1).toEqual(2);
  });
});
