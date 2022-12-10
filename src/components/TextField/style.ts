import styled from "styled-components";
import device from "../../utils/breakpoints";

export const StyledLabel = styled.label`
  width: 100%;
  display: block;
  position: relative;

  & > input {
    border: 1px solid ${(props) => props.theme.gray};
    outline: none;
    box-shadow: none;
    border-radius: 3px;
    padding: 10px;
    width: 100%;
    font-size: 16px;

    &:focus,
    &:hover,
    &:active {
      outline: none;

      & ~ span {
        font-size: 9px;
        top: -18%;
        opacity: 1;
      }

      &::placeholder {
        font-size: 9px;
        opacity: 0;
      }
    }

    &::placeholder {
      font-weight: normal;
      font-size: 12px;
      color: ${(props) => props.theme.gray};
      transition: font-size 300ms;
    }

    &:not(:placeholder-shown) {
      & ~ span {
        font-size: 9px;
        top: -18%;
        opacity: 1;
      }
    }
  }

  & span {
    background-color: ${(props) => props.theme.white};
    font-size: 12px;
    color: ${(props) => props.theme.gray};
    position: absolute;
    left: 5%;
    opacity: 0;
    top: 10%;
    padding: 0 5px;
    transition: opacity 300ms;
    transition: top 300ms;
    transition: font-size 300ms;
    width: max-content;
  }

  @media ${device.laptop} {
    & > input {
      font-size: 1.2vw;
      padding: 14px;

      &::placeholder {
        font-size: 1vw;
      }
    }

    & span {
      font-size: 1vw;
    }
  }
`;