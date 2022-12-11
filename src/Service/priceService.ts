import { toast } from "react-toastify";
import client  from "../config/apollo";
import { ICoinProps } from "../types";
import { GET_COIN_PRICES } from "./query/coinPriceQuery";

export const getPrice = async (coinCode: string): Promise<ICoinProps[]> => {
    const { data, error } = await client.query({
        query: GET_COIN_PRICES,
        variables: { coinCode },
    });
    if (error) {
        toast.error(error.message);
    }
    if (!data.markets.length) {
        console.log({ notAVAILABLE: data.market})
        toast.error(`No coin found for ${coinCode}.`,  {
            autoClose: 1500,
        });
    }
    if (data.markets.length && !data.markets[0].ticker?.lastPrice) {
        toast.error(`Coin price not found ${coinCode}`, {
            autoClose: 1500,
        });
    }

    return data.markets.length ? data.markets : [];
};
