import React from 'react';
import { fireEvent } from '@testing-library/react';

import Button from './Button';
import { render } from '../../../test-utils';

describe('Button', () => {
  const onButtonClick = jest.fn();

  it('renders children when passed in', () => {
    const { getByTestId } = render(
      <Button onClick={onButtonClick}>
        <span data-testid="button-children">Add</span>
      </Button>,
    );
    const buttonChildren = getByTestId('button-children');

    expect(buttonChildren).toBeInTheDocument();
  });

  it('simulates click events', () => {
    const { getByTestId } = render(
      <Button onClick={onButtonClick} testId="button-test">
        <span data-testid="button-children">Add</span>
      </Button>,
    );
    const button = getByTestId('button-test');

    fireEvent.click(button);

    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when isDisabled true', () => {
    const { getByTestId } = render(
      <Button isDisabled testId="button-test">
        <span>Add</span>
      </Button>,
    );

    const button = getByTestId('button-test');

    expect(button).toBeDisabled();
  });
});
