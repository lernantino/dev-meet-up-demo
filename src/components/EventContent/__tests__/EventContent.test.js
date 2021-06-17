/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import EventContent from '../index';

beforeEach(() => {
  jest.spyOn(console, 'error');
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  console.error.mockRestore();
});

describe('EventContent (Component)', () => {
  it('Renders with speakers', () => {
    const props = {
      speakers: ['test speaker'],
      where: 'Test location',
      content: 'Test event content',
    };
    render(<EventContent {...props} />);
    expect(
      screen.queryByRole('heading', { name: 'Speakers' }),
    ).toBeInTheDocument();
  });

  it('Renders without speakers', () => {
    const props = {
      where: 'Test location',
      content: 'Test event content',
    };
    render(<EventContent {...props} />);
    expect(
      screen.queryByRole('heading', { name: 'Speakers' }),
    ).not.toBeInTheDocument();
  });
});
