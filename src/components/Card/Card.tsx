import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#f5f5f5"};

  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 300px;

  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Card = ({
  title = "Card Title",
  content = "Card Content",
  backgroundColor,
  disabled = false,
}: CardProps) => {
  return (
    <StyledCard
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};
