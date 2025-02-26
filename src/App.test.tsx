import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { createView } from './Factory';

const View = createView;

test('renders learn react link', () => {
  render(<View />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
