import { useMemo } from 'react';

import { ICoinListProps } from '../../types';
import { StyledUl } from './style';

import Empty from '../Empty';
import SingleCoin from '../SingleCoin';

const Coinlist = ({ coins, onClick }: ICoinListProps) => {
  const cointList = useMemo(
    () =>
      coins.map((coin) => (
        <SingleCoin coin={coin} key={coin.coinId} onDeleteCoin={onClick} />
      )),
    [coins, onClick],
  );

  return coins.length?  <StyledUl>{cointList}</StyledUl> : <Empty/>;
};

export default Coinlist;
