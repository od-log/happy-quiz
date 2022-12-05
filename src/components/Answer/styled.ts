import styled from "styled-components";

type Prop = {
  clicked: boolean;
  correct: boolean;
};

export const Example = styled.div<Prop>`
  cursor: pointer;
  font-weight: ${({ clicked, correct }) => (clicked || correct ? 700 : 500)};
  color: ${({ correct }) => (correct ? "#00c896" : "black")};
  &:hover {
    font-size: 18px;
  }
`;
export const ButtonArea = styled.div`
  position: absolute;
  bottom: 0;
  padding: 16px;
  right: 0;
`;
