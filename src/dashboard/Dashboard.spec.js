// Test away

import React from 'react';
import * as rtl from '@testing-library/react';
import Dashboard from './Dashboard';

// Dashboard MVP
test('Dashboard renders without crashing', () => {
  rtl.render(<Dashboard />);
});

// Dashboard MVP
test('<Dashboard /> snapshot', () => {
  const wrapper = rtl.render(<Dashboard />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});

// Gate MVP
test('Gate defaults to unlocked and open', () => {

});

// Gate MVP
test('Gate cannot be closed or opened if it is locked', () => {

});