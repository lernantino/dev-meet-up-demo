/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Header from '../index';

beforeEach(() => {
  jest.spyOn(console, 'error');
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  console.error.mockRestore();
});

describe('Header (Component)', () => {
  it('Renders', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('Matches the snapshot', () => {
    const tree = render(<Header />);
    expect(tree).toMatchSnapshot();
  });

  it('Renders nav items', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: 'All Events' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Donate' })).toBeInTheDocument();
  });
});
