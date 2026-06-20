import { RadioButton } from "./RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    label: "Select me",
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Radio",
    disabled: true,
  },
};