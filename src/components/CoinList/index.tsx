import { useMemo } from 'react';

import { IListProps } from '../../types';

import Empty from '../Empty';
import SingleCoin from '../SingleCoin';

const Coinlist = ({ coins, onClick }: IListProps) => {
  const cointList = useMemo(
    () =>
      [...coins]?.map((coin) => (
        <SingleCoin coin={coin} key={coin.coinId} onDeleteCoin={onClick} />
      )),
    [coins, onClick],
  );

  return coins.length?  <ul>{cointList}</ul> : <Empty/>;
};

export default Coinlist;
