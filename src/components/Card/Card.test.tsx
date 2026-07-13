import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Card } from "./Card";

test("Card is visible", () => {
  render(<Card title="Test Card" />);
  expect(screen.getByText("Test Card")).toBeVisible();
});

test("Card background changes when disabled", () => {
  render(<Card title="Test Card" disabled />);
  const card = screen.getByRole("region", { name: "Test Card" });

  expect(card).toHaveStyleRule("background-color", "#cccccc");
});
