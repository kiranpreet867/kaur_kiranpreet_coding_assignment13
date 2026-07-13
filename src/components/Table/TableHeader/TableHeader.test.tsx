import { render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";

test("TableHeader is visible", () => {
  render(
    <table>
      <TableHeader />
    </table>,
  );

  expect(screen.getByText("Name")).toBeVisible();
});

test("TableHeader renders", () => {
  render(
    <table>
      <TableHeader />
    </table>,
  );

  expect(screen.getByText("Course")).toBeVisible();
});
