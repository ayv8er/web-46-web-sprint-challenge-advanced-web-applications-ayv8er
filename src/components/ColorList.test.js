import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

const testColors = [
  {
    code: { hex: "" },
    color: "black",
    id: 1,
  },
  {
    code: { hex: "" },
    color: "red",
    id: 2,
  },
];

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={[]} />);
  const colors = screen.getByText(/colors/i);
  expect(colors).toBeInTheDocument();
});

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={testColors} />);
  const black = screen.getByText(/black/i);
  const red = screen.getByText(/red/i);
  expect(black).toBeInTheDocument();
  expect(red).toBeInTheDocument();
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const { rerender } = render(<ColorList editing={true} colors={testColors} />);
  let editForm = screen.queryByTestId("edit_menu");
  expect(editForm).toBeInTheDocument();
  rerender(<ColorList editing={false} colors={testColors} />);
  editForm = screen.queryByTestId("edit_menu");
  expect(editForm).not.toBeInTheDocument();
});
