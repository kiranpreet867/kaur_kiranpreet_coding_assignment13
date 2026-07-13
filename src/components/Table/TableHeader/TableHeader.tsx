import { TableHeaderProps } from "./TableHeader.types";

export const TableHeader = ({ disabled = false }: TableHeaderProps) => {
  return (
    <thead style={{ opacity: disabled ? 0.6 : 1 }}>
      <tr>
        <th>Name</th>
        <th>Course</th>
      </tr>
    </thead>
  );
};
