import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { RadioButton } from "./RadioButton";

test("RadioButton is visible", () => {
  render(<RadioButton label="Test Radio" />);
  expect(screen.getByText("Test Radio")).toBeVisible();
});

test("RadioButton background changes when disabled", () => {
  render(<RadioButton label="Test Radio" disabled />);
  const radio = screen.getByText("Test Radio");
  expect(radio).toHaveStyleRule("background-color", "#cccccc");
});
