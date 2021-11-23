import React from 'react';

import { render } from 'test-utils';
import App from './App';

describe('App', () => {
  it('should render a main element', () => {
    const { getByTestId } = render(<App />);
    const appMain = getByTestId('app-main');

    expect(appMain).toBeInTheDocument();
  });
});
