import { TableCell } from "./TableCell";

const meta = {
  title: "Components/Table/TableCell",
  component: TableCell,
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    text: "Sample Cell",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Cell",
    disabled: true,
  },
};