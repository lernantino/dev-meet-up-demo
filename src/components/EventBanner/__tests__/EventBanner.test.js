/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import EventBanner from '../index';

describe('EventBanner (Component)', () => {
  it('Renders', () => {
    const props = {
      name: 'Sample Event Title',
      date: 'Monday, June 7th, 2021',
      featuredImage: { url: '/images/featured-1.jpg' },
    };
    render(<EventBanner {...props} />);
    expect(
      screen.getByRole('heading', { name: 'Sample Event Title' }),
    ).toBeInTheDocument();
  });

  it('Renders without a featured image prop', () => {
    const props = {
      name: 'Sample Event Title',
      date: 'Monday, June 7th, 2021',
    };
    render(<EventBanner {...props} />);
    expect(
      screen.getByRole('heading', { name: 'Sample Event Title' }),
    ).toBeInTheDocument();
  });
});
