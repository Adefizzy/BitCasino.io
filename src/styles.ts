import styled from "styled-components";

import device from "./utils/breakpoints";


export const FlexBox = styled.div<IFlexProps>`
    display: flex;
    justify-content:${props => props?.justifyContent || 'flex-start'} ;
    align-items: ${props => props?.alignItems || 'flex-start'} ;
    width:${props => props?.width || 'fit-content'};
    height:${props => props.height || 'auto'} ;
    flex-direction: ${props => props.flexDirection || 'row'} ;
`

export const StyledLayout = styled.main`
  background-color: ${(props) => props.theme.primary};
  min-height: 100vh;
  color: ${(props) => props.theme.white};
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 10vh;

  background-image: url(${'/assets/bg.png'});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 200%;
  background-position: -20% 0%;
  @media ${device.laptop} {
    background-position: 68vw -3vw;
    background-size: 80%;
  }
`;

export const StyledSection = styled.section`
  grid-row: 1/4;
  @media ${device.laptop} {
    background-image: url(${'/assets/figure.png'});
    background-repeat: no-repeat;
    background-origin: padding-box;
    background-position: center bottom;
    background-size: 30%;

    & > div {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }
`;
