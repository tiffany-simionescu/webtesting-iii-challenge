// Test away!
import React from 'react'; 
import { render } from '@testing-library/react';
import Display from './Display';
import '@testing-library/jest-dom/extend-expect';

test('Display component renders properly', () => {
  const wrapper = render(<Display />);
  expect(wrapper).toMatchSnapshot();
})

// - displays if gate is open/closed and if it is locked/unlocked
test("displays if gate is open/closed and if it is locked/unlocked", () => {
  const { getByText } = render(<Display />);
  getByText(/locked/i) || getByText(/unlocked/i);
  getByText(/closed/i) || getByText(/open/i);
})

// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
test("shows Closed if closed prop is `true` otherwise Open", () => {
  const { getByText } = render(<Display closed={true} />);
  getByText(/closed/i);
})

// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
test("shows Locked if locked prop is true otherwise unlocked", () => {
  const { getByText } = render(<Display locked={true} />);
  getByText(/locked/i);
})

// - when `locked` or `closed` use the `red-led` class
test("Locked/Closed uses red-led class", () => {
  const { queryByText } = render(<Display locked={true} />);
  const locked = queryByText(/locked/i);
  expect(locked).toHaveClass('red-led');
})

// - when `unlocked` or `open` use the `green-led` class
test("Unlocked/Open uses green-led class", () => {
  const { queryByText } = render(<Display closed={false} />);
  const unlocked = queryByText(/open/i);
  expect(unlocked).toHaveClass('green-led');
})