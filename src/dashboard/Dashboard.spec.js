// Test away

import React from 'react';
import * as rtl from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

test('Dashboard renders without crashing', () => {
  rtl.render(<Dashboard />);
});

test('<Dashboard /> snapshot', () => {
  const wrapper = rtl.render(<Dashboard />);
  expect(wrapper.asFragment()).toMatchSnapshot();
})