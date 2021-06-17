/**
 * @jest-environment jsdom
 */
import { render, screen, within } from '@testing-library/react';
import Events from '../pages/events';

const eventListSample = [
  {
    name: 'Happy Hour',
    eventDate: new Date('Wednesday, April 28, 2021'),
    location: 'The Dev Snack Shack',
    description:
      'Join us for our monthly happy hour! Just a time for us to take a break from work, eat some food, and enjoy the company of like-minded developers.',
    featuredImage: { url: '/images/featured-3.jpg' },
    slug: 'happy-hour-april-2021',
  },
  {
    name: 'Happy Hour',
    eventDate: new Date('Wednesday, April 20, 2022'),
    location: 'The Dev Snack Shack',
    description:
      'Join us for our monthly happy hour! Just a time for us to take a break from work, eat some food, and enjoy the company of like-minded developers.',
    featuredImage: { url: '/images/featured-3.jpg' },
    slug: 'happy-hour-april-2022',
  },
];

beforeEach(() => {
  jest.spyOn(console, 'error');
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  console.error.mockRestore();
});

describe('Events', () => {
  const props = {
    eventList: [...eventListSample],
  };

  it('Renders all page components', () => {
    render(<Events {...props} />);

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Upcoming Events' }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText('The team at Meet/Hang/Code'),
    ).toBeInTheDocument();
  });

  it('Does not render the list if there are no events.', async () => {
    render(<Events {...props} />);

    expect(screen.queryByText('list')).not.toBeInTheDocument();
  });

  it('Has uniform dates in "Day, Month Date, Year" format.', async () => {
    render(<Events {...props} />);

    const eventListItems = screen.getAllByRole('listitem');

    eventListItems.forEach((item) => {
      expect(
        within(item).getByRole('heading', {
          name: /^[a-z|A-Z]*,\s[a-z|A-Z]*\s[0-9]*,\s[0-9]*$/i,
        }),
      ).toBeInTheDocument();
    });
  });
});
