import { TableProps } from "./Table.types";

export const Table = ({
  backgroundColor = "#ffffff",
  disabled = false,
}: TableProps) => {
  return (
    <table
      style={{
        width: "100%",
        backgroundColor: disabled ? "#cccccc" : backgroundColor,
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Kiranpreet</td>
          <td>Web Development</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Total</td>
          <td>1 Student</td>
        </tr>
      </tfoot>
    </table>
  );
};
