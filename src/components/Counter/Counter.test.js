 import React from 'react';
 import '@testing-library/jest-dom/extend-expect';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';

test('increase btn', () => {
  // Use act to wrap the rendering of your component
  act(() => {
    render(<Counter></Counter>);
  });

  const count = screen.getByText("0");
  const increaseBtn = screen.getByText("Increase", { exact: false });

  // Use act to wrap the userEvent.click
  act(() => {
    userEvent.click(increaseBtn);
  });

  // Use act to wrap the expectation
  act(() => {
    expect(count).toHaveTextContent("1");
  });
});


test('decrease btn', () => {
    act(() => {
      render(<Counter></Counter>);
    });
  
    const count = screen.getByText("0");
    const decreaseBtn = screen.getByText("Decrease", { exact: false });
  
    act(() => {
      userEvent.click(decreaseBtn);
    });
  
    act(() => {
      expect(count).toHaveTextContent("-1");
    });
  });
  
