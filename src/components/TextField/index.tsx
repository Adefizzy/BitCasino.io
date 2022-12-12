import { StyledLabel } from './style';



export const TextField = (props: ITextFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(event.currentTarget.value)
  }
  return (
    <StyledLabel>
      <input placeholder='CRYPOCURRENCY CODE' value={props.value} onChange={handleChange}/>
      <span>CRYPOCURRENCY CODE</span>
    </StyledLabel>
  );
};

export default TextField;
