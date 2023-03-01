import React from 'react';
import { render } from '@testing-library/react';
import EventCard from '..';

describe('EventCard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<EventCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
