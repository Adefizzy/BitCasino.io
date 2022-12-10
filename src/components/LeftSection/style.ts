import styled from "styled-components";
import device from "../../utils/breakpoints";

export const StyledLeftSection = styled.article`
  flex-basis: 100%;
  padding: 0 16px;
  & > h1 {
    font-size: 32px;
    margin-bottom: 0px;
  }

  & > p {
    font-size: 16px;
    opacity: 0.5;
    margin-top: 15px;
    margin-bottom: 40px;
  }

  & > :last-child {
    border-bottom: none;
  }

  @media ${device.laptop} {
    flex-basis: 35%;
    padding: 0px;
    & > h1 {
      font-size: 3vw;
    }
    & > p {
      font-size: 1.5vw;
    }
  }
`;