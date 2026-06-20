import { HeroImage } from "./HeroImage";

const meta = {
  title: "Components/HeroImage",
  component: HeroImage,
};

export default meta;

export const Default = {
  args: {
    title: "Welcome",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Hero",
    disabled: true,
  },
};