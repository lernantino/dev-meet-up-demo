/**
 * @jest-environment jsdom
 */

import { render, screen, within } from '@testing-library/react';
import UpcomingEvents from '../index';

beforeEach(() => {
  jest.spyOn(console, 'error');
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  console.error.mockRestore();
});

const eventListSample = [
  {
    name: 'Happy Hour',
    eventDate: 'Wednesday, April 28, 2021',
    location: 'The Dev Snack Shack',
    description:
      'Join us for our monthly happy hour! Just a time for us to take a break from work, eat some food, and enjoy the company of like-minded developers.',
    featuredImage: { url: '/images/featured-3.jpg' },
    slug: 'happy-hour-april-2021',
  },
  {
    name: 'Happy Hour',
    eventDate: 'Wednesday, April 20, 2022',
    location: 'The Dev Snack Shack',
    description:
      'Join us for our monthly happy hour! Just a time for us to take a break from work, eat some food, and enjoy the company of like-minded developers.',
    featuredImage: { url: '/images/featured-3.jpg' },
    slug: 'happy-hour-april-2022',
  },
  {
    name: 'Meet the Devs: Netscape',
    eventDate: 'Tuesday, February 9, 2021',
    location: 'Virtual',
    speakers: ['Dina Net Scapio', 'Tunde Abebe'],
    description:
      'Netscape, the birthplace of JavaScript. Do not miss this once-in-a-lifetime installment of Meet the Devs as we get to talk to members of the original team behind the language you all use to this day.',
    featuredImage: { url: '/images/featured-1.jpg' },
    slug: 'meet-the-devs-netscape-2021',
  },
];

describe('UpcomingEvents (Component)', () => {
  it('Renders with a list of events', async () => {
    const props = {
      eventList: [...eventListSample],
    };
    render(<UpcomingEvents {...props} />);
    const eventList = screen.getByRole('list');

    const { getAllByRole } = within(eventList);
    const items = getAllByRole('listitem');

    expect(items.length).toBe(3);
  });

  it("Informs user there are no events if there aren't any.", async () => {
    const props = {
      eventList: [],
    };
    render(<UpcomingEvents {...props} />);

    expect(
      screen.getByText('There are no upcoming events!'),
    ).toBeInTheDocument();
  });

  it('Does not render the list if there are no events.', async () => {
    const props = {
      eventList: [],
    };
    render(<UpcomingEvents {...props} />);

    expect(screen.queryByText('list')).not.toBeInTheDocument();
  });

  it('Works without any props passed in', async () => {
    render(<UpcomingEvents />);

    expect(screen.queryByText('list')).not.toBeInTheDocument();
  });
});
