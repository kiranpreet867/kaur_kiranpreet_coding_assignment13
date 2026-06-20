import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    options: ["HTML", "CSS", "JavaScript"],
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    options: ["HTML", "CSS", "JavaScript"],
    disabled: true,
  },
};