import React from 'react';
import { fireEvent } from '@testing-library/react';

import ToggleButtonGroup from './ToggleButtonGroup';
import { render } from '../../test-utils';

describe('ToggleButtonGroup', () => {
  const onButtonClick = jest.fn();
  const options = [
    { value: 'opt1', text: 'Option 1' },
    { value: 'opt2', text: 'Option 2' },
  ];
  const selected = 'opt2';

  it('renders buttons from options', () => {
    const { queryAllByTestId } = render(
      <ToggleButtonGroup options={options} selected={selected} onClick={onButtonClick} />,
    );
    const toggleButtons = queryAllByTestId('toggle-button');

    expect(toggleButtons).toHaveLength(2);
  });

  it('simulates click events', () => {
    const { getAllByTestId } = render(
      <ToggleButtonGroup options={options} selected={selected} onClick={onButtonClick} />,
    );
    const toggleButtons = getAllByTestId('toggle-button');

    fireEvent.click(toggleButtons[0]);

    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
