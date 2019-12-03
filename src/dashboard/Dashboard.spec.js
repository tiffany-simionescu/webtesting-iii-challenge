// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

// Dashboard Renders Properly
test('Dashboard renders without crashing', () => {
  render(<Dashboard />);
});

// Dashboard - shows the controls and display
test('<Dashboard /> snapshot', () => {
  const wrapper = render(<Dashboard />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});

// Gate - defaults to `unlocked` and `open`
test('Gate defaults to unlocked and open', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlocked/i);
  getByText(/open/i);
});
