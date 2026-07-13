import { render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";

test("TableRow is visible", () => {
  render(
    <table>
      <tbody>
        <TableRow />
      </tbody>
    </table>,
  );

  expect(screen.getByText("Kiranpreet")).toBeVisible();
});

test("TableRow disabled state renders", () => {
  render(
    <table>
      <tbody>
        <TableRow disabled />
      </tbody>
    </table>,
  );

  expect(screen.getByText("Web Development")).toBeVisible();
});
