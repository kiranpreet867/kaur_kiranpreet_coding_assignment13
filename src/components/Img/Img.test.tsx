import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Img } from "./Img";

test("Img is visible", () => {
  render(<Img alt="Test Image" />);
  expect(screen.getByAltText("Test Image")).toBeVisible();
});

test("Img background changes when disabled", () => {
  const { container } = render(<Img disabled />);
  expect(container.firstChild).toHaveStyleRule("background-color", "#cccccc");
});