import { StyledCoin } from './style';
import { IListItemProps } from '../../types';

import toNum from '../../utils/toNum';
import CloseIcon from '../CloseIcon';

const SingleCoin = ({ onDeleteCoin, coin }: IListItemProps) => {
  return (
    <StyledCoin>
      <div>
        <img src='/assets/icon.svg' alt='coin' />
        <div>
          <p>{`${coin?.coinId}`.toUpperCase()}</p>
          <p>{toNum(coin?.ticker?.lastPrice)}€</p>
        </div>
      </div>
      <CloseIcon
        onClick={() => {
          onDeleteCoin(coin.coinId);
        }}
      />
    </StyledCoin>
  );
};

export default SingleCoin;
