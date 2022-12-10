import styled from "styled-components";
import device from '../../utils/breakpoints';


export const StyledHeader = styled.header`
width: 85%;
margin: 0 auto;
padding: 20px 0;
`;

export const StyledLogo = styled.img`
  width: 150px;
  height: auto;

  @media ${device.laptop} {
    width: 13vw;
  }
`;