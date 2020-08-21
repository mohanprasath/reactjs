import React from "react";
import ReactDOM from "react-dom";
import About from "./../About";

import { render } from "@testing-library/react";
import "jest-dom/extend-expect";

it("Testing About Page", () => {
  const div = document.createElement("div");
  ReactDOM.render(<About></About>, div);
});

it("renders h2 correctly", () => {
  const { getByTestId } = render(<About text="About Page"></About>);
  expect(getByTestId("textData")).toBe("About Page");
});
