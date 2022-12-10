import styled from "styled-components";
import device from "../../utils/breakpoints";


export const StyledFromContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  height: 40vh;
  display: grid;
  place-items: center;
  margin-bottom: 20px;

  & > div {
    width: 83%;
  }

  & > p {
    width: 83%;
    color: ${(props) => props.theme.gray};
    text-align: center;
  }

  @media ${device.laptop} {
    width: 32%;
    border-radius: 5px;
    margin-bottom: 0px;
  }
`;