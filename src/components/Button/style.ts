import styled from "styled-components";




export const StyledButton = styled.button<ButtonStyleProps>`
  background-color: ${(props) => props?.isDelete ? props.theme.red : props?.isAdd ? props.theme.secondary : props.theme.grayLight};
  width: ${props => props.width || '100%'};
  border: none;
  color: ${(props) => props.isDelete || props.isAdd? props.theme.white:props.theme.black};
  padding: ${props => props.isAdd? '15px 0px': '8px 0px'};
  border-radius: ${props => props.isAdd? '25px' : '5px'};
  margin-top:  15px;
  margin-left: ${props => props.isDelete? '15px' : '0px'} ;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold ;

  &:hover, &:active, &:focus {
    opacity: 0.8;
  }

  &:disabled{
    opacity: 0.5;
  }
`;