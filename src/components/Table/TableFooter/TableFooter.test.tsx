import { render, screen } from "@testing-library/react";
import { TableFooter } from "./TableFooter";

test("TableFooter is visible", () => {
  render(
    <table>
      <TableFooter />
    </table>,
  );

  expect(screen.getByText("Total")).toBeVisible();
});

test("TableFooter renders disabled state", () => {
  render(
    <table>
      <TableFooter disabled />
    </table>,
  );

  expect(screen.getByText("1 Student")).toBeVisible();
});
