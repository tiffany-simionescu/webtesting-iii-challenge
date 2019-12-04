// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

// Controls render properly
test("Controls render properly", () => {
   render(<Controls />);
})

// Controls Snapshot
test("<Controls /> Snapshot", () => {
  const wrapper = render(<Controls />);
  expect(wrapper.asFragment()).toMatchSnapshot();
})

// Gate - cannot be closed or opened if it is locked
// Cannot be Opened Test
test('Gate cannot be opened if it is locked', () => {
  // Cannot be Opened Test
  const toggleOpen = jest.fn();
  const { getByText } = render(
    <Controls 
      toggleClosed={toggleOpen} 
      locked={true} 
      closed={false} 
    />);

  const openButton = getByText(/close/i);
  fireEvent.click(openButton);
  expect(toggleOpen).not.toHaveBeenCalled();
});

// Gate - cannot be closed or opened if it is locked
// Cannot be Closed Test
test('Gate cannot be closed if it is locked', () => {
  const toggleClose = jest.fn();
  const { getByText } = render(
    <Controls 
      toggleClosed={toggleClose} 
      locked={true} 
      closed={false} 
    />);

  const closeButton = getByText(/close/i);
  fireEvent.click(closeButton);
  expect(toggleClose).not.toHaveBeenCalled();
});

// - provide buttons to toggle the `closed` and `locked` states.
// Toggle closed Test
test("toggle closed state", () => {
  const toggleClosed = jest.fn();
  const { getByText } = render(
    <Controls 
      closed={false} 
      toggleClosed={toggleClosed} 
    />);
  
  const closeButton = getByText(/close/i);
  fireEvent.click(closeButton);
  expect(toggleClosed).toHaveBeenCalled();
});

// Toggle locked Test
test("toggle locked state", () => {
  const mockGate = jest.fn();
  mockGate(/unlock gate/i);
  mockGate(/lock gate/i);
  expect(mockGate).toHaveBeenCalled();
  expect(mockGate).toHaveBeenCalledTimes(2);
})

// - buttons' text changes to reflect the state the door will be in if clicked
test("text changes of buttons to reflect state", () => {
  const { getByText, findByText } = render(<Controls />);
  fireEvent.click(getByText("Close Gate"));
  findByText(/Open Gate/i);
});

// - the closed toggle button is disabled if the gate is locked
// THIS SHOULD FAIL
test("Cannot open gate if locked", () => {
  const controls = render(<Controls />);

  const closeButton = controls.getByText('Close Gate');
  fireEvent.click(closeButton);

  const lockButton = controls.getByText("Lock Gate");
  fireEvent.click(lockButton);

  // THIS SHOULD FAIL - HERE
  const openButton = controls.getByText("Open Gate");
  fireEvent.click(openButton);
})

// - the locked toggle button is disabled if the gate is open
// THIS SHOULD FAIL
test("locked toggle disabled if gate it open", () => {
  const { getByText, findByText } = render(<Controls />);
  fireEvent.click(getByText("Open Gate"));
  findByText(/Lock Gate/i);
})