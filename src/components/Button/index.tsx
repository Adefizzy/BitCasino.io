import React from 'react';
import { StyledButton } from './style';
import { IButtonProps } from  '../../types';


const Button = (props: IButtonProps) => {
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <StyledButton
      width={props.width}
      isDelete={props.isDelete}
      isAdd={props.isAdd}
      onClick={handleClick}
      disabled={props.disabled}
    >
      {props.loading ? '...loading' : props.children}
    </StyledButton>
  );
};

export default Button;
