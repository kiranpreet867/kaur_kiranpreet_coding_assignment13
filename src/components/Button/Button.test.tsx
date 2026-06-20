import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Button } from "./Button";

test("Button is visible", () => {
  render(<Button text="Test Button" />);
  expect(screen.getByText("Test Button")).toBeVisible();
});

test("Button background changes when disabled", () => {
  const { container } = render(<Button text="Disabled Button" disabled />);
  expect(container.firstChild).toHaveStyleRule("background-color", "#cccccc");
});