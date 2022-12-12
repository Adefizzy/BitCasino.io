import { StyledFromContainer } from './style';


export const Form = (props: IChildrenProps) => {
  return (
    <StyledFromContainer>
      <div>
        <form>
          {props.children}
        </form>
      </div>
      <p>Use of this service is subject to terms and conditions.</p>
    </StyledFromContainer>
  );
};

export default Form;
