import React from 'react';
 import '@testing-library/jest-dom/extend-expect';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from '.';

describe("Todo testleri",() => {
let button, input;
beforeEach(() => {
    render(<Todo></Todo>);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
});


test('varsayılan değerler render edilmeli',() =>{
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
});
});