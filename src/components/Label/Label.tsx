import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#28a745"};
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Label = ({
  text = "Label",
  backgroundColor,
  disabled = false,
}: LabelProps) => {
  return (
    <StyledLabel backgroundColor={backgroundColor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};
