import { TableRowProps } from "./TableRow.types";

export const TableRow = ({ disabled = false }: TableRowProps) => {
  return (
    <tr style={{ backgroundColor: disabled ? "#cccccc" : "#ffffff" }}>
      <td>Kiranpreet</td>
      <td>Web Development</td>
    </tr>
  );
};