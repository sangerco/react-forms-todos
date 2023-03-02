import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it('renders without crashing', () => {
    render(<TodoList />);
})

it('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it('makes new todo', () => {
    const { queryByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText('New Todo?');
    const btn = queryByText('Add todo');
    expect(queryByText('Mow Lawn')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Mow Lawn' } });

})

it('deletes a todo', () => {
    const { queryByText } = render(<TodoList />);
    expect(queryByText('Clean Up Dog Poop')).toBeInTheDocument();
    const btn = queryByText('Done!');
    fireEvent.click(btn);
    expect(queryByText('Clean Up Dog Poop')).not.toBeInTheDocument();
})