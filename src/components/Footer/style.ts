import styled from "styled-components";


export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.gray};
  text-align: center;
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 15px;
  font-size: 1.2vw;
  grid-row: 4/5;

  & p {
    width: 80%;
  }
`;