import { useState } from "react";
import { toast } from "react-toastify";
import { ICoinProps, ICoinsHelperResponse } from "../types";
import { getPrice } from "../Service/priceService";

export default function UseCoins(): ICoinsHelperResponse {
    const [coins, setCoins] = useState<ICoinProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const addCoin = async (coinId: string): Promise<void> => {
        if (!coinId) {
            toast.error("Please enter a coin name");
            return;
        }

        const hasCoin = [...coins].some((coin) => coin.coinId === coinId);
        if (hasCoin) {
            toast.warning(`This coin already exist ${coinId}`);
            return;
        }
        setIsLoading(true)
        const marketData = await getPrice(coinId);
        if (marketData.length) {
            setCoins((state) => [{ ...marketData[0], coinId }, ...state]);
            toast.success(`Successfully added ${coinId}`, {
                autoClose: 1500,
            });
        }

        setIsLoading(false)
    };

    const removeCoin = (coinId: string): void => {
        setCoins(
            (prevState) =>
                ([...prevState].filter((coin) => coin.coinId !== coinId))
        );
        toast.success(`You have deleted ${coinId} from the list`, {
            position: "top-left",
            autoClose: 1500,
        });
    };

    return { removeCoin, addCoin, coins, isLoading };
}
