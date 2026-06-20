import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<TextProps>`
  color: ${(props) => (props.disabled ? "#cccccc" : "#000000")};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Text = ({
  text = "Sample Text",
  disabled = false,
}: TextProps) => {
  return <StyledText disabled={disabled}>{text}</StyledText>;
};
