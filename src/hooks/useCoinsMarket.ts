import { useState } from "react";
import { toast } from "react-toastify";
import { getCoinMarkets } from "../Service/coinMarketService";

const UseCoinsMarket = (): IUseCoin => {
    const [coins, setCoins] = useState<ICoinProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const addCoin = async (coinId: string) => {
        const hasCoin = coins.some((coin) => coin.coinId === coinId);
        if (hasCoin) {
            toast.warning(`This coin already exist: ${coinId}`);
            return;
        }

        setIsLoading(true)
        const coinPriceData = await getCoinMarkets(coinId);
        if (coinPriceData.length) {
            setCoins((state) => [{ ...coinPriceData[0], coinId }, ...state]);
            toast.success(`Successfully added ${coinId}`, {
                autoClose: 1500,
            });
        }
        setIsLoading(false)
    };

    const deleteCoin = (coinId: string) => {
        setCoins(
            (prevState) =>
                ([...prevState].filter((coin) => coin.coinId !== coinId))
        );
        toast.success(`You have deleted ${coinId} from the list`, {
            position: "top-left",
            autoClose: 1500,
        });
    };

    return { deleteCoin, addCoin, coins, isLoading };
}


export default UseCoinsMarket;
