import { FlexBox } from '../../styles';
import { StyledParagraph } from './style';

const Empty = () => {
  return (
    <FlexBox width='100%' height='30vh' justifyContent='center' alignItems='center'>
      <StyledParagraph color='red'>No Data </StyledParagraph>
    </FlexBox>
  );
};

export default Empty;
