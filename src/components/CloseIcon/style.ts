import styled from "styled-components";

export const StyledIconButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.white};
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid gray;
  }
`;