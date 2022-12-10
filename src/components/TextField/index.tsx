import { StyledLabel } from './style';


type Props = {};
export const TextField = (props: Props) => {
  return (
    <StyledLabel>
      <input placeholder='CRYPOCURRENCY CODE' />
      <span>CRYPOCURRENCY CODE</span>
    </StyledLabel>
  );
};

export default TextField;
