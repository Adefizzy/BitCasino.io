import React from 'react';
import { StyledLeftSection } from './style';

type Props = {
    children: React.ReactNode;
};
const LeftSection = (props: Props) => {
    return (
        <StyledLeftSection>
        <h1>Now you can track all your crypto here!</h1>
        <p>
          Just enter the <br /> crypocurrency code on the <br /> form to
          the right
        </p>
        {props.children}
      </StyledLeftSection>
    );
};

export default LeftSection;