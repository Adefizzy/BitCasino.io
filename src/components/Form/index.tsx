// @flow
import * as React from 'react';
import TextField from '../TextField';
import Button from '../Button';


import { StyledFromContainer } from './style';

type Props = {};
export const Form = (props: Props) => {
  return (
    <StyledFromContainer>
      <div>
        <form>
          <TextField />
          <Button />
        </form>
      </div>
      <p>Use of this service is subject to terms and conditions.</p>
    </StyledFromContainer>
  );
};

export default Form;
