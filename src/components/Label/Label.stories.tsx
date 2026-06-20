import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    text: "My Label",
    backgroundColor: "#28a745",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Label",
    disabled: true,
  },
};