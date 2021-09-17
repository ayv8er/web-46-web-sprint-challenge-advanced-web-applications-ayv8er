import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

const testColor = [
  {
    code: { hex: "#dd99ba" },
    color: "softpink",
    id: "6",
  },
];

test("Renders without errors with blank color passed into component", () => {
  //   render(<Color color={testColor} />);
  //   const colors = screen.getByTestId("color");
  //   expect(colors).toBeInTheDocument();
});

test("Renders the color passed into component", () => {
  //   render(<Color color={testColor} />);
  //   const color = screen.getByText(/softpink/i);
  //   expect(color).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  //   const handleDelete = jest.fn();
  //   const toggleEdit = jest.fn();
  //   render(
  //     <Color
  //       color={testColor}
  //       handleDelete={handleDelete}
  //       toggleEdit={toggleEdit}
  //     />
  //   );
  //   const deleteButton = screen.getByTestId("delete");
  //   const editDiv = screen.getByTestId("color");
  //   userEvent.click(editDiv);
  //   userEvent.click(deleteButton);
  //   expect(handleDelete).toHaveBeenCalled(1);
  //   expect(toggleEdit).toHaveBeenCalled(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  //   render(<Color color={testColor} />);
});
