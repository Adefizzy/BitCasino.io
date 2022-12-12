import { toast } from "react-toastify";

import client  from "../config/apollo";
import { GET_COIN_PRICES } from "./queries/coinPriceQuery";

export const getCoinMarkets = async (coinCode: string): Promise<ICoinProps[]> => {
    const { data, error } = await client.query({
        query: GET_COIN_PRICES,
        variables: { coinCode },
    });


    if (error) {
        toast.error(error.message);
    }
    if (!data.markets.length) {
        toast.error(`No coin found for ${coinCode}.`,  {
            autoClose: 1500,
        });
    }
  
    return data.markets.length ? data.markets : [];
};
