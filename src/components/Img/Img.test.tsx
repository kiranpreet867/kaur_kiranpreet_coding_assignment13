import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Img } from "./Img";

test("Img is visible", () => {
  render(<Img alt="Test Image" />);
  expect(screen.getByAltText("Test Image")).toBeVisible();
});

test("Img background changes when disabled", () => {
  render(<Img alt="Test Image" disabled />);
  const img = screen.getByAltText("Test Image");
  expect(img).toHaveStyleRule("background-color", "#cccccc");
});
