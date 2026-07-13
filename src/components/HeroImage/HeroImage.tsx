import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroContainer = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const HeroImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const HeroTitle = styled.h1`
  position: absolute;
  top: 40%;
  left: 10%;
  color: white;
`;

export const HeroImage = ({
  src = "https://via.placeholder.com/1200x300",
  title = "Hero Banner",
  disabled = false,
}: HeroImageProps) => {
  return (
    <HeroContainer disabled={disabled}>
      <HeroImg src={src} alt={title} />
      <HeroTitle>{title}</HeroTitle>
    </HeroContainer>
  );
};
