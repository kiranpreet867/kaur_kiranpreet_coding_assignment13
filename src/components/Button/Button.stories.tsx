import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    text: "Click Me",
    backgroundColor: "#007bff",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Button",
    disabled: true,
  },
};