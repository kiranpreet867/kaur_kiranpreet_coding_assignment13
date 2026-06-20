import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    title: "My Card",
    content: "This is a card component.",
    backgroundColor: "#f5f5f5",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Card",
    content: "Card is disabled.",
    disabled: true,
  },
};
