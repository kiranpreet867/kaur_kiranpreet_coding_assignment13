import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

test("HeroImage is visible", () => {
  render(<HeroImage title="Test Hero" />);
  expect(screen.getByText("Test Hero")).toBeVisible();
});

test("HeroImage disabled state", () => {
  render(<HeroImage disabled />);
  expect(screen.getByAltText("Hero Banner")).toBeVisible();
});
