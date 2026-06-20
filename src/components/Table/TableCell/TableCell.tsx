import { TableCellProps } from "./TableCell.types";

export const TableCell = ({
  text = "Table Cell",
  disabled = false,
}: TableCellProps) => {
  return (
    <td style={{ backgroundColor: disabled ? "#cccccc" : "#ffffff" }}>
      {text}
    </td>
  );
};