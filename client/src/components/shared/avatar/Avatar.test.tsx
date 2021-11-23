import React from 'react';

import Avatar from './Avatar';
import { render } from '../../../test-utils';

describe('Avatar', () => {
  it('renders an image', () => {
    const { getByTestId } = render(<Avatar imgUrl="/logo192.png" size="small" />);
    const avatarImage = getByTestId('avatar-image');

    expect(avatarImage).toBeInTheDocument();
  });
});
