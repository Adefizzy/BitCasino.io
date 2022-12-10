import { StyledCoin, StyledIconButton } from "./style";
import { AiOutlineClose } from 'react-icons/ai';

import getMoneyFormat from "../../utils/getMoneyFormat";

const SingleCoin = () => {
    return (
        <StyledCoin>
        <div>
          <img src='/assets/icon.svg' alt='coin' />
          <div>
            <p>BTC</p>
            <p>{getMoneyFormat(1234566)}</p>
          </div>
        </div>
        <StyledIconButton>
          <AiOutlineClose />
        </StyledIconButton>
      </StyledCoin>
    );
};

export default SingleCoin;