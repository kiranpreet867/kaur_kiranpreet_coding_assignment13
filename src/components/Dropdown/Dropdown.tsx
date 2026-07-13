import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<DropdownProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#ffffff"};

  padding: 10px;
  border: 1px solid #999;
  border-radius: 5px;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const Dropdown = ({
  options = ["Option 1", "Option 2", "Option 3"],
  backgroundColor,
  disabled = false,
}: DropdownProps) => {
  return (
    <StyledSelect backgroundColor={backgroundColor} disabled={disabled}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </StyledSelect>
  );
};
