import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Dropdown } from "./Dropdown";

test("Dropdown is visible", () => {
  render(<Dropdown options={["Option 1", "Option 2"]} />);
  expect(screen.getByRole("combobox")).toBeVisible();
});

test("Dropdown background changes when disabled", () => {
  const { container } = render(<Dropdown disabled />);
  expect(container.firstChild).toHaveStyleRule("background-color", "#cccccc");
});