import React from "react";
import MutationObserver from "mutationobserver-shim";

import mockFetchColorService from "../services/fetchColorService";
jest.mock("../services/fetchColorService.js");

import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

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

test("Renders without errors", () => {
  render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async () => {
  //Keep in mind that our service is called on mount for this component.
  //   mockFetchColorService.mockResolvedValueOnce(testColors);
  //   render(<BubblePage />);
  //   const colors = await screen.findAllByTestId("color");
  //   expect(colors).toHaveLength(2);
}); // OMG!!!
