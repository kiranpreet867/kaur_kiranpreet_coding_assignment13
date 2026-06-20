import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

test("Text is visible", () => {
  render(<Text text="Test Text" />);
  expect(screen.getByText("Test Text")).toBeVisible();
});

test("Text disabled state renders", () => {
  render(<Text text="Disabled Text" disabled />);
  expect(screen.getByText("Disabled Text")).toBeVisible();
});
