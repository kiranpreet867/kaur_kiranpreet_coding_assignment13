import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "transparent"};
  width: 300px;
  max-width: 100%;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const Img = ({
  src = "https://via.placeholder.com/300",
  alt = "Placeholder image",
  backgroundColor,
  disabled = false,
}: ImgProps) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      backgroundColor={backgroundColor}
      disabled={disabled}
    />
  );
};
