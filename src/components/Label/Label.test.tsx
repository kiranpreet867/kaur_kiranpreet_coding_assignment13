import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Label } from "./Label";

test("Label is visible", () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText("Test Label")).toBeVisible();
});

test("Label background changes when disabled", () => {
  const { container } = render(<Label disabled />);
  expect(container.firstChild).toHaveStyleRule("background-color", "#cccccc");
});
