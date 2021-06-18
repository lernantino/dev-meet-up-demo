/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import FeaturedEventSection from '../index';

beforeEach(() => {
  jest.spyOn(console, 'error');
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockRestore();
});

describe('FeaturedEventSection (Component)', () => {
  it('Renders the featured event', () => {
    const defaultEvent = {
      slug: '/',
      featuredImage: { url: '/images/featured-4.jpg' },
      name: 'Sample event name',
    };
    render(<FeaturedEventSection event={defaultEvent} />);
    expect(
      screen.getByRole('heading', { name: 'Sample event name' }),
    ).toBeInTheDocument();
  });

  it('Renders the featured event title even with no props', () => {
    render(<FeaturedEventSection />);
    expect(
      screen.getByRole('heading', { name: /Featured\sEvent/ }),
    ).toBeInTheDocument();
  });

  it('Renders the featured event section links', () => {
    const defaultEvent = {
      slug: '/',
      featuredImage: { url: '/images/featured-4.jpg' },
      name: 'Sample event name',
    };
    render(<FeaturedEventSection event={defaultEvent} />);
    expect(
      screen.getByRole('link', { name: 'See all events.' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: 'Donate and keep the meetups coming!' }),
    ).toBeInTheDocument();
  });
});
