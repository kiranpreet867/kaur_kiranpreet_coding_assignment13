import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("Table is visible", () => {
  render(<Table />);
  expect(screen.getByText("Kiranpreet")).toBeVisible();
});

test("Table renders footer", () => {
  render(<Table />);
  expect(screen.getByText("Total")).toBeVisible();
});
