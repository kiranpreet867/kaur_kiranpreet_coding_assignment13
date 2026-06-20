import { render, screen } from "@testing-library/react";
import { TableCell } from "./TableCell";

test("TableCell is visible", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Test Cell" />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText("Test Cell")).toBeVisible();
});

test("TableCell disabled state renders", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Disabled Cell" disabled />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText("Disabled Cell")).toBeVisible();
});