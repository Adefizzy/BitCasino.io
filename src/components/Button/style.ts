import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.secondary};
  width: 100%;
  border: none;
  color: ${(props) => props.theme.white};
  padding: 15px 0px;
  border-radius: 25px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 18px;
`;