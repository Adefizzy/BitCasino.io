import { StyledCoin } from './style';
import { ISingleCoinProps } from '../../types';

import formatPrice from '../../utils/formatPrice';
import CloseIcon from '../CloseIcon';

const SingleCoin = ({ onDeleteCoin, coin }: ISingleCoinProps) => {
  return (
    <StyledCoin>
      <div>
        <img src='/assets/icon.svg' alt='coin' />
        <div>
          <p>{`${coin?.coinId}`.toUpperCase()}</p>
          <p>{formatPrice(coin?.ticker?.lastPrice)} €</p>
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
