import styled from "styled-components";
import device from "../../utils/breakpoints";


export const StyledCoin = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.primaryLight};
  padding-bottom: 15px;
  margin-bottom: 15px;

  & > div {
    display: flex;
    align-items: center;
    & > div {
      margin-left: 20px;  

      & > p:first-child {
        font-size: 16px;
        margin:0px;
      }
      & > p:last-child {
        font-size: 11px;
        margin:3px 0px 0px 0px;

      }
    }

    & > img {
      width: 24px;
      height: auto;
    }
  }
  @media ${device.laptop} {
    width: 70%;
    & > div {
      & > img {
        width: 2.4vw;
        height: auto;
      }
      & > div {
        & > p:first-child {
          font-size: 1.2vw;
        }
        & > p:last-child {
          font-size: 0.9vw;
          opacity: 0.5;
        }
      }
    }
  }
`;



