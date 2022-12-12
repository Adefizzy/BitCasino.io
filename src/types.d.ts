 type ICoinProps = {
    coinId: string;
    marketSymbol: string;
    ticker: {
        lastPrice: string;
    };
    //loading?: false;
}

 type IUseCoin = {
    deleteCoin: (param: string) => void;
    addCoin: (param: string) => Promise<void>;
    coins: ICoinProps[];
    isLoading: boolean
}

 type ISingleCoinProps = {
    coin: ICoinProps;
    onDeleteCoin: (coinId: string) => void;
};

 type ICoinListProps = {
    coins: ICoinProps[];
    onClick: (coinId: string) => void;
}

 type IFlexProps = {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    height?: string;
    width?: string;
}

 type IButtonProps = {
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    isDelete?: boolean;
    isAdd?: boolean;
    width?: string;
    children: React.ReactNode
};

 type IChildrenProps = {
    children: React.ReactNode
};


 type IModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void
};


 type ButtonStyleProps = {
    isDelete?: boolean,
    isAdd?: boolean,
    width?: string
}

 type ICloseIconProps = {
    onClick: () => void
}

 type ITextFieldProps = {
    onChange: (value: string) => void,
    value: string
}