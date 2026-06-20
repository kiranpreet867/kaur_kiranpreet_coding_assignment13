import { TableFooterProps } from "./TableFooter.types";

export const TableFooter = ({
  disabled = false,
}: TableFooterProps) => {
  return (
    <tfoot
      style={{
        backgroundColor: disabled ? "#cccccc" : "#f5f5f5",
      }}
    >
      <tr>
        <td>Total</td>
        <td>1 Student</td>
      </tr>
    </tfoot>
  );
};