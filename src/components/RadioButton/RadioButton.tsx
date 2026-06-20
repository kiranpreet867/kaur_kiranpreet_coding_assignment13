import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const RadioWrapper = styled.label<RadioButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#ffffff"};
  padding: 10px;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const RadioButton = ({
  label = "Radio Button",
  name = "radio",
  backgroundColor,
  disabled = false,
}: RadioButtonProps) => {
  return (
    <RadioWrapper backgroundColor={backgroundColor} disabled={disabled}>
      <input type="radio" name={name} disabled={disabled} />
      {label}
    </RadioWrapper>
  );
};